export type AlbumsState = {
  albums: {
    albumList: [];
  };
};

export type Album = {
  album: {
    artists: {
      name: string;
    }[];
  };
  id: string;
  images: {
    height: number;
    url: string;
    width: number;
  }[];
  name: string;
  release_date: string;
};

export type AlbumsResponse = {
  data: {
    items: Album[];
  };
};
