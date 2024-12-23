"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import MovieCard from "./MovieCard";
import Image from "next/image";

interface IENewMovie {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
}

interface INewMovies {
  NewMovies: IENewMovie[];
}

const EmblaWrapper = ({ NewMovies }: INewMovies) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 3000 }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla py-5">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {NewMovies.map((NewMovie: IENewMovie) => (
            <div
              className="embla__slide duration-150 hover:-translate-y-[3px]"
              key={NewMovie.id}
            >
              <MovieCard
                id={NewMovie.id}
                title={NewMovie.original_title}
                image={"https://image.tmdb.org/t/p/w500" + NewMovie.poster_path}
                rating={NewMovie.vote_average}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center space-x-4 pt-5">
        <button className="embla__prev" onClick={scrollPrev}>
          <Image src="/left-arrow.png" alt="arrow" width={32} height={32} />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <Image src="/right-arrow.png" alt="arrow" width={32} height={32} />
        </button>
      </div>
    </div>
  );
};

export default EmblaWrapper;
