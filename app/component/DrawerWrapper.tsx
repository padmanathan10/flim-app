"use client";

import * as React from "react";
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

const DrawerWrapper = ({
  isOpen,
  onOpenChange,
  data,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data: any;
}) => {
  console.log("individual data", data);
  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-black max-w-[1140px] w-full mx-auto border-gray-700">
        <div className="w-full">
          <DrawerHeader className="h-0 absolute">
            <DrawerTitle></DrawerTitle>
            <DrawerDescription></DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 bg-black w-full relative">
            <Image
              src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
              alt={"image"}
              width={300}
              height={300}
              style={{
                objectFit: "cover",
                objectPosition: "top center",
                opacity: "30%",
                filter: "blur(10px)",
              }}
            />
            <div className="absolute inset-0 flex items-center mx-16 justify-between">
              <Image
                src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
                alt={"image"}
                width={200}
                height={200}
                sizes="200"
                className="rounded-lg"
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
              <div className="max-w-2xl">
                <p className="text-white font-bold text-6xl pb-6">
                  {data.title ? data.title : data.name}
                </p>
                <p className="text-white text-lg">{data.overview}</p>
                <p className="text-white text-lg py-3">
                  Release Date :{" "}
                  <span className="font-semibold text-lg">
                    {data.release_date
                      ? data.release_date
                      : data.first_air_date}
                  </span>
                </p>
                <div className="flex items-center space-x-2">
                  <Image src="/star.png" alt="rating" width={18} height={18} />
                  <p className="text-white font-bold text-lg">{`${data.vote_average.toFixed(
                    1
                  )} / 10`}</p>
                </div>
              </div>
            </div>
            {/* <p className="text-white">{JSON.stringify(data)}</p> */}
          </div>
          <DrawerFooter className="absolute top-0 right-0">
            <DrawerClose asChild>
              <button>Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerWrapper;
