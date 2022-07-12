import { gql } from '@apollo/client'

export const GET_MOVIE = gql`
  query Movie($id: Int, $lng: String) {
    movie(id: $id, lng: $lng) @rest(
      type: "Movie",
      path: "/movie/{args.id}?language={args.lng}&append_to_response=videos"
    ) {
      adult
      backdropPath
      belongsToCollection
      budget
      genres
      homepage
      id
      imdbId
      originalLanguage
      originalTitle
      overview
      popularity
      posterPath
      productionCompanies
      productionCountries
      releaseDate
      revenue
      runtime
      spokenLanguages
      status
      tagline
      title
      video
      videos
      voteAverage
      voteCount
    }
  }
`

export const GET_POPULAR = gql`
  query PopularMovies($page: Int, $lng: String) {
    movies(page: $page, lng: $lng) @rest(
      type: "popularMovies",
      path: "/movie/popular?language={args.lng}&page={args.page}"
    ) {
      page
      results @type(name: "Movie") {
        id
        adult
        backdropPath
        genreIds
        originalLanguage
        originalTitle
        overview
        popularity
        posterPath
        releaseDate
        title
        video
        voteAverage
        voteCount
      }
      totalPages
      totalResults
    }
  }
`

export const SEARCH = gql`
  query SearchMovies($page: Int, $query: String, $lng: String) {
    movies(page: $page, query: $query, lng: $lng) @rest(
      type: "searchMovies",
      path: "/search/movie?language={args.lng}&page={args.page}&query={args.query}"
    ) {
      page
      results @type(name: "Movie") {
        id
        posterPath
        adult
        overview
        releaseDate
        genreIds
        originalTitle
        originalLanguage
        title
        backdropPath
        popularity
        voteCount
        video
        voteAverage
      }
      totalPages
      totalResults
    }
  }
`

export const DISCOVER = gql`
  query DiscoverMovies($page: Int, $withGenres: String, $lng: String) {
    movies(page: $page, withGenres: $withGenres, lng: $lng) @rest(
      type: "discoverMovies",
      path: "/discover/movie?language={args.lng}&page={args.page}&with_genres={args.withGenres}"
    ) {
      page
      results @type(name: "Movie") {
        id
        posterPath
        adult
        overview
        releaseDate
        genreIds
        originalTitle
        originalLanguage
        title
        backdropPath
        popularity
        voteCount
        video
        voteAverage
      }
      totalPages
      totalResults
    }
  }
`

export const GET_GENRES = gql`
  query Genres($page: Int, $lng: String) {
    genres(page: $page, lng: $lng) @rest(
      type: "Genre",
      path: "/genre/movie/list?language={args.lng}"
    ) {
      genres @type(name: "Genre") {
        id
        name
      }
    }
  }
`
