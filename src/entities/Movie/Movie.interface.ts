import { Genre } from "../Genres/Genres";

export interface IProductionCompanies {
  id?: number;
  name?: string;
  logo_path?: string | null;
  origin_country?: string;
}

export interface IProductionCountries {
  iso_3166_1?: string;
  name?: string;
}

export interface ISpokenLanguages {
  iso_639_1?: string;
  name?: string;
}

export interface IMovie {
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
  voteAverage?: number;
  voteCount?: number;
}
