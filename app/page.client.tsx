"use client";

import { useEffect, useState } from "react";
import TabWrapper from "./component/TabWrapper";
import { useScrollBottom } from "./hooks/useScrollBottom";
import { TabWrapperProps } from "./types";
import { fetchPopularMovies, fetchPopularTvShows } from "./utils/fetch";

export default function PageClient(props: TabWrapperProps) {
  const { PopularMovies, PopularTvShows } = props;
  const isBottom = useScrollBottom({ threshold: 20 }); // 20px threshold

  const [pageNumber, setPageNumber] = useState<number>(1);
  const [newPopularMovies, setNewPopularMovies] = useState(PopularMovies);
  const [newPopularTvShows, setNewPopularTvShows] = useState(PopularTvShows);
  const [activeTab, setActiveTab] = useState<"movies" | "tv-shows">("movies");

  useEffect(() => {
    if (isBottom) {
      const fetchMoreData = async () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
        if (activeTab === "movies") {
          const nextPageMovies = await fetchPopularMovies(pageNumber + 1);
          setNewPopularMovies((prev) => [...prev, ...nextPageMovies]);
        } else if (activeTab === "tv-shows") {
          const nextPageTvShows = await fetchPopularTvShows(pageNumber + 1);
          setNewPopularTvShows((prev) => [...prev, ...nextPageTvShows]);
        }
      };
      fetchMoreData();
    }
  }, [isBottom, activeTab]);

  return (
    <div>
      <TabWrapper
        PopularMovies={newPopularMovies}
        PopularTvShows={newPopularTvShows}
        setActiveTab={setActiveTab}
      />
    </div>
  );
}
