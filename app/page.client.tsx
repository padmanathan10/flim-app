"use client";

import { useEffect, useState } from "react";
import TabWrapper from "./component/TabWrapper";
import { useScrollBottom } from "./hooks/useScrollBottom";
import { TabWrapperProps } from "./types";
import { fetchPopularMovies, fetchPopularTvShows } from "./utils/fetch";

export default function PageClient(props: TabWrapperProps) {
  console.log(props);
  const { PopularMovies, PopularTvShows } = props;
  const isBottom = useScrollBottom({ threshold: 20 }); // 20px threshold
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [newPopularMovies, setNewPopularMovies] = useState(PopularMovies);
  const [newPopularTvShows, setNewPopularTvShows] = useState(PopularTvShows);

  useEffect(() => {
    if (isBottom) {
      const fetchMorePopularMovies = async () => {
        const nextPageMovies = await fetchPopularMovies(pageNumber + 1); // Fetch the next page
        setNewPopularMovies((three) => [...three, ...nextPageMovies]); // Append new movies
      };
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      fetchMorePopularMovies();
      const fetchMorePopularTvShows = async () => {
        const nextPagePopularShows = await fetchPopularTvShows(pageNumber + 1); // Fetch the next page
        setNewPopularTvShows((three) => [...three, ...nextPagePopularShows]); // Append new shows
      };
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
      fetchMorePopularTvShows();
    }
  }, [isBottom]);

  return (
    <div>
      <TabWrapper
        PopularMovies={newPopularMovies}
        PopularTvShows={newPopularTvShows}
      />
    </div>
  );
}
