import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MovieCard from "./MovieCard";
import { TabWrapperProps } from "../types";

const TabWrapper: React.FC<TabWrapperProps> = ({
  PopularMovies,
  PopularTvShows,
}) => {
  return (
    <Tabs defaultValue="movies" className="">
      <div className="w-full flex justify-center mb-8">
        <TabsList className="bg-gray-700">
          <TabsTrigger
            className="text-white data-[state=active]:text-white data-[state=active]:bg-gray-500 w-[92px]"
            value="movies"
          >
            Movies
          </TabsTrigger>
          <TabsTrigger
            className="text-white data-[state=active]:text-white data-[state=active]:bg-gray-500 w-[92px]"
            value="tv-shows"
          >
            TV Shows
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="movies">
        <h2 className="text-xl text-gray-800 font-bold text-center pb-8 uppercase tracking-tight">
          Popular Movies
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {PopularMovies.map((movie) => (
            <div
              className="duration-150 hover:-translate-y-[3px] mx-2 mb-4"
              key={movie.id + Math.random()}
            >
              <MovieCard
                id={movie.id}
                title={movie.original_title}
                image={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
                rating={movie.vote_average}
                data={movie}
              />
            </div>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="tv-shows">
        <h2 className="text-xl text-gray-800 font-bold text-center pb-8 uppercase tracking-tight">
          Popular TV Shows
        </h2>
        <div className="flex flex-wrap justify-center -mx-4">
          {PopularTvShows.map((show) => (
            <div
              className="duration-150 hover:-translate-y-[3px] mx-2 mb-4"
              key={show.id + Math.random()}
            >
              <MovieCard
                id={show.id}
                title={show.original_name}
                image={"https://image.tmdb.org/t/p/w500" + show.poster_path}
                rating={show.vote_average}
                data={show}
              />
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabWrapper;
