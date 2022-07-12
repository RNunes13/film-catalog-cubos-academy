import { Genre, Genres } from "../Genres/Genres";
import { IGenre } from "../Genres/Genres.interface";
import { IMovie } from "./Movie.interface"

export type { IMovie } from './Movie.interface';

export class Movies {
  movies: IMovie[];

  constructor(movieList: IMovie[] = [], genres: IGenre[] = []) {
    const movies = this.#createMovies(movieList, genres)

    this.movies = movies
  }

  #createMovies(movies: IMovie[], genres: IGenre[]) {
    return []
      .concat(movies as [])
      .map(movie => this.#createMovie(movie, genres))
  }

  #createMovie(genre: IMovie = {}, genres: IGenre[]) {
    return new Movie(genre, genres)
  }
}

export class Movie {
  genres?: Genre[]

  constructor(args: IMovie, genres: IGenre[]) {
    Object.assign(this, args)

    const movieGenres = (args.genreIds || []).map(id =>
      genres.find(g => g.id === id)
    ).filter(Boolean)

    const genreEntity = new Genres(movieGenres as Genre[] || [])

    this.genres = genreEntity.genres
  }
}
