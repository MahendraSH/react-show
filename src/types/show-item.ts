type Network = {
  id: number;
  name: string;
  country: {
    name: string;
    code: string;
    timezone: string;
  };
  officialSite: string | null;
};

type Schedule = {
  time: string;
  days: string[];
};

type Rating = {
  average: number;
};

type Image = {
  medium: string;
  original: string;
};

export type ShowItem = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: string | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number | null;
    thetvdb: number;
    imdb: string;
  };
  image: Image;
  summary: string;
  updated: number;
  _links: {
    self: {
      href: string;
    };
    previousepisode: {
      href: string;
    };
  };
};

export type Item = {
  score: number;
  show: ShowItem;
};
