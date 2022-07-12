import { IVideo, TYPES } from "./Videos.interface";

export class Videos {
  list: Video[];

  constructor(args: IVideo[] = []) {
    const videos = this.#createVideos(args)

    this.list = videos
  }

  #createVideos(videos: IVideo[] = []) {
    return [].concat(videos as []).map(this.#createVideo)
  }

  #createVideo(video: IVideo) {
    return new Video(video)
  }

  get trailer() {
    return this.list.find(({ isTrailer }) => isTrailer)
  }
}

export class Video implements IVideo {
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

  constructor(args: IVideo) {
    this.iso6391 = args.iso6391
    this.iso31661 = args.iso31661
    this.name = args.name
    this.key = args.key
    this.site = args.site
    this.size = args.size
    this.type = args.type
    this.official = args.official
    this.publishedAt = args.publishedAt
    this.id = args.id
  }

  get isTrailer() {
    return this.type === TYPES.trailer
  }
}
