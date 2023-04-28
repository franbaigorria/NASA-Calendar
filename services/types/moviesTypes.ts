export interface HTTPResponseMovie {
  data: MovieInterface;
  status: number;
  statusText: string;
  headers: HTTPResponseMovieHeaders;
  config: Config;
  request: Request;
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Request;
  headers: ConfigHeaders;
  baseURL: string;
  params: Params;
  method: string;
  url: string;
}

export interface Request {
}

export interface ConfigHeaders {
  Accept: string;
}

export interface Params {
  query: string;
  page: number;
  api_key: string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface MovieInterface {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}

export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface HTTPResponseMovieHeaders {
  "access-control-allow-origin": string;
  "access-control-expose-headers": string;
  "alt-svc": string;
  "cache-control": string;
  "content-encoding": string;
  "content-type": string;
  date: string;
  etag: string;
  server: string;
  vary: string;
  via: string;
  "x-amz-cf-id": string;
  "x-amz-cf-pop": string;
  "x-cache": string;
  "x-memc": string;
  "x-memc-age": string;
  "x-memc-expires": string;
  "x-memc-key": string;
}
