export const fetchPopularMovies = async (pageNumber?: number) => {
  const PopularMoviesData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/popular-movies?page=${pageNumber || 1}`
  );
  const PopularMoviesResult = await PopularMoviesData.json();
  return PopularMoviesResult.results;
};


export const fetchPopularTvShows = async (pageNumber?: number) => {
  const PopularTvShowsData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/popular-tv-shows?page=${pageNumber || 1}`
  );
  const PopularTvShowsResult = await PopularTvShowsData.json();
  return PopularTvShowsResult.results;
};

