type BaseMedia = {
  id: number;
  poster_path: string;
  vote_average: number;
};

type PopularMovie = BaseMedia & {
  original_title: string;
};

type PopularTvShow = BaseMedia & {
  original_name: string;
};

type PopularMoviesProps = {
  PopularMovies: PopularMovie[];
};

type PopularTvShowsProps = {
  PopularTvShows: PopularTvShow[];
};

export type TabWrapperProps = PopularMoviesProps & PopularTvShowsProps;