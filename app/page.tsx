// import { db } from "@/lib/prisma";
import EmblaWrapper from "./component/EmblaWrapper";
import PageClient from "./page.client";
import { fetchPopularMovies, fetchPopularTvShows } from "./utils/fetch";
// import { auth } from "@/lib/auth";

export default async function Home() {
  const NowPlayingMoviesData = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/now-playing`
  );
  const NowPlayingMoviesResult = await NowPlayingMoviesData.json();
  const NowPlayingMovies = NowPlayingMoviesResult.results;

  const PopularTvShows = await fetchPopularTvShows();
  const PopularMovies = await fetchPopularMovies();

  // const session = await auth();

  // const post = await db.post.create({
  //   data: {},
  // });

  return (
    <div>
      {/* <pre>{JSON.stringify(session, null, 2)}</pre> */}
      <h3 className="text-3xl text-gray-800 font-bold text-center pt-8 uppercase tracking-tight">
        Now Playing
      </h3>
      <EmblaWrapper NowPlayingMovies={NowPlayingMovies} />
      <div className="max-w-[1100px] px-4 mx-auto mt-10">
        <PageClient
          PopularTvShows={PopularTvShows}
          PopularMovies={PopularMovies}
        />
      </div>
    </div>
  );
}
