"use client";

import { useEffect } from "react";
import TabWrapper from "./component/TabWrapper";
import { useScrollBottom } from "./hooks/useScrollBottom";

export default function PageClient(props: any) {
  const { PopularMovies, PopularTvShows } = props.data;
  const isBottom = useScrollBottom({ threshold: 20 }); // 20px threshold

  useEffect(() => {
    if (isBottom) {
      alert("Page bottom reached");
    }
  }, [isBottom]);

  return (
    <div>
      <TabWrapper
        PopularMovies={PopularMovies}
        PopularTvShows={PopularTvShows}
      />
    </div>
  );
}
