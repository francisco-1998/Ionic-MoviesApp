export interface RespTMDB {
  results: Pelicula[];
  total_results: number;
  total_pages: number;
  page: number;
}

export interface Pelicula {
  vote_average: number;
  popularity: number;
  overview: string;
  release_date: string;
  adult: boolean;
  backdrop_path: string;
  title: string;
  genre_ids: number[];
  vote_count: number;
  original_language: string;
  original_title: string;
  id: number;
  poster_path: string;
  video: boolean;
}