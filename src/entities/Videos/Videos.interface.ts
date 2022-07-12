export enum TYPES {
  featurette = 'Featurette',
  teaser = 'Teaser',
  trailer = 'Trailer',
  behindTheScenes = 'Behind the Scenes'
}

export interface IVideo {
  iso6391: string;
  iso31661: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: TYPES;
  official: boolean;
  publishedAt: string;
  id: string;
}
