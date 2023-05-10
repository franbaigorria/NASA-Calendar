export interface ApodResponse {
  copyright?: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: MediaType;
  service_version: ServiceVersion;
  title: string;
  url: string;
}

export enum MediaType {
  Image = "image",
}

export enum ServiceVersion {
  V1 = "v1",
}