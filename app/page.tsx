// "use client";

import EmblaWrapper from "./component/EmblaWrapper";
import TabWrapper from "./component/TabWrapper";

// import axios from "axios";
// const API_KEY = "457aa28e9bf9ee647e8fd3ab14381a6c";

export default async function Home() {
  const NowPlayingMoviesData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/now-playing`
  );
  const NowPlayingMoviesResult = await NowPlayingMoviesData.json();
  const NowPlayingMovies = NowPlayingMoviesResult.results;

  const PopularMoviesData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/popular-movies`
  );
  const PopularMoviesResult = await PopularMoviesData.json();
  const PopularMovies = PopularMoviesResult.results;

  const PopularTvShowsData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/popular-tv-shows`
  );
  const PopularTvShowsResult = await PopularTvShowsData.json();
  const PopularTvShows = PopularTvShowsResult.results;

  return (
    <div>
      <h3 className="text-3xl text-gray-800 font-bold text-center pt-8 uppercase tracking-tight">
        Now Playing
      </h3>
      <EmblaWrapper NowPlayingMovies={NowPlayingMovies} />
      <div className="max-w-[1100px] px-4 mx-auto mt-10">
        <TabWrapper
          PopularMovies={PopularMovies}
          PopularTvShows={PopularTvShows}
        />
      </div>
    </div>
  );
}
