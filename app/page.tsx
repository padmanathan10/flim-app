// "use client";

import MovieCard from "./component/MovieCard";
import EmblaWrapper from "./component/EmblaWrapper";

// import axios from "axios";
// const API_KEY = "457aa28e9bf9ee647e8fd3ab14381a6c";

export default async function Home() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/now-playing`);
  const result = await data.json();
  const NewMovies = result.results;

  return (
    <div>
      <h3 className="text-3xl text-gray-800 font-bold text-center pt-8 uppercase tracking-tight">
        Now Playing
      </h3>
      <EmblaWrapper NewMovies={NewMovies} />
    </div>
  );
}
