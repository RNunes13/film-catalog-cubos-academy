import { Genre, Genres } from "../Genres/Genres"
import { IGenre } from "../Genres/Genres.interface"
import { Video, Videos } from "../Videos/Videos"
import { IMovie, IProductionCompanies, IProductionCountries, ISpokenLanguages } from "./Movie.interface"

export type { IMovie } from './Movie.interface';

export class Movies {
  movies: Movie[];

  constructor(movieList: IMovie[] = [], genres: IGenre[] = []) {
    const movies = this.#createMovies(movieList, genres)

    this.movies = movies
  }

  #createMovies(movies: IMovie[], genres: IGenre[]) {
    return []
      .concat(movies as [])
      .map(movie => this.#createMovie(movie, genres))
  }

  #createMovie(movie: IMovie = {}, genres: IGenre[]) {
    return new Movie(movie, genres)
  }
}

export class Movie {
  adult?: boolean;
  backdropPath?: string | null;
  belongsToCollection?: null | object;
  budget?: number;
  genreIds?: number[];
  genres?: Genre[];
  homepage?: string | null;
  id?: number;
  imdbId?: string | null;
  originallanguage?: string;
  originalTitle?: string;
  overview?: string | null;
  popularity?: number;
  posterPath?: string | null;
  productionCompanies?: IProductionCompanies[];
  productionCountries?: IProductionCountries[];
  releaseDate?: string;
  revenue?: number;
  runtime?: number | null;
  spokenLanguages?: ISpokenLanguages[];
  status?: string;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  videos: Videos;
  voteAverage?: number;
  voteCount?: number;

  constructor(args: IMovie, genres: IGenre[] = []) {
    Object.assign(this, args)

    this.genres = args.genres || this.#buildGenres(genres)
    this.videos = this.#buildVideos(args)
  }

  #buildGenres(genres: IGenre[]): Genre[] {
    const movieGenres = (this.genreIds || []).map(id =>
      genres.find(g => g.id === id)
    ).filter(Boolean)

    const genreEntity = new Genres(movieGenres as Genre[] || [])

    return genreEntity.genres
  }

  #buildVideos(args: IMovie) {
    return new Videos(args.videos?.results)
  }

  get formattedReleaseDate() {
    return new Date(`${this.releaseDate}T00:00:00.00`).toLocaleDateString('pt-BR')
  }
}
