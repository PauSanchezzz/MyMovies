export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  vote_average: number;
}

export interface ApiResponse {
  page: number;
  results: Movie[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetails {
  id: number;
  title: string;
  vote_average: number;
  runtime: number;
  overview: string;
  genres: Genre[];
  release_date: string;
  poster_path: string;
}
