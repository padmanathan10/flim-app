import React, { useState } from "react";
import Image from "next/image";
import DrawerWrapper from "./DrawerWrapper";

interface IENewMovie {
  id: number;
  title: string;
  image: string;
  rating: number;
  data: any;
}

const MovieCard = ({ id, title, image, rating, data }: IENewMovie) => {
  const [open, setOpen] = useState<boolean>(false);
  function handleClose() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <div
        onClick={handleClose}
        key={id}
        className="relative rounded-xl overflow-hidden before:absolute before:bg-dark-shadow before:bottom-0 before:left-0 before:right-0 before:bg-cover before:bg-no-repeat before:content-[''] before:w-full before:h-[140%] before:z-10 cursor-pointer"
      >
        <div className="relative w-[240px] h-[320px]">
          <Image src={image} alt={"image"} fill={true} sizes="100%" />
        </div>
        <div className="absolute bottom-0 z-20 p-4">
          <p className="text-white text-xl font-semibold">{title}</p>
          <div className="flex items-center space-x-1.5 pt-1">
            <Image src="/star.png" alt="rating" width={18} height={18} />
            <p className="text-white text-base font-bold">{`${rating.toFixed(
              1
            )} / 10`}</p>
          </div>
        </div>
      </div>
      <DrawerWrapper
        isOpen={open}
        onOpenChange={() => setOpen(false)}
        data={data}
      />
    </>
  );
};

export default MovieCard;
