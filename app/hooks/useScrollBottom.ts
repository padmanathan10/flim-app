"use client";

import { useEffect, useState } from "react";

interface UseScrollBottomOptions {
  threshold?: number;
  containerId?: string;
}

export function useScrollBottom({ threshold = 0, containerId = "scrollable-content" }: UseScrollBottomOptions = {}) {
  const [reachedBottom, setReachedBottom] = useState(false);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) {
      console.error(`Container with id "${containerId}" not found.`);
      return;
    }

    const handleScroll = () => {
      const distanceFromBottom = 
        container.scrollHeight - (container.scrollTop + container.clientHeight);
      
      const hasReachedBottom = distanceFromBottom <= threshold;

      if (hasReachedBottom && !reachedBottom) {
        setReachedBottom(true);
        // console.log("Reached bottom");
      } else if (!hasReachedBottom && reachedBottom) {
        setReachedBottom(false);
        // console.log("Left bottom");
      }
    };

    container.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [threshold, reachedBottom, containerId]);

  return reachedBottom;
} 