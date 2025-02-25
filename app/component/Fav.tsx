"use client";

import React from "react";

const Fav = (
  { movieId } : { movieId: string }
) => {

  const handleFav = async () => {
    const res = await fetch("/api/favourites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ movieId }),
    })
    console.log("response",res)
    const data = await res.json()
    console.log("data",data.newFav)
  }

  return (
    <figure className="w-7 h-7 flex items-center justify-center bg-gray-900 rounded-md bg-opacity-70 group" onClick={handleFav}>
      <svg
        width="18"
        height="15"
        viewBox="0 0 22 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="group-hover:fill-red-600 duration-200"
          d="M15.7221 1.73032e-05C14.8256 -0.00205778 13.9392 0.182531 13.124 0.541077C12.3089 0.899623 11.5843 1.42361 11.0001 2.07696C10.416 1.42361 9.69135 0.899623 8.87618 0.541077C8.06102 0.182531 7.17466 -0.00205778 6.27811 1.73032e-05C5.05125 -0.00263778 3.85059 0.34087 2.82514 0.987906C1.79969 1.63494 0.994605 2.55702 0.509803 3.6397C0.0250013 4.72238 -0.118171 5.91798 0.0980567 7.07813C0.314284 8.23828 0.88039 9.31189 1.72611 10.1657L10.2791 18.705C10.3724 18.7983 10.4844 18.8725 10.6083 18.9232C10.7322 18.9739 10.8655 19 11.0001 19C11.1348 19 11.2681 18.9739 11.3919 18.9232C11.5158 18.8725 11.6278 18.7983 11.7211 18.705L20.2741 10.1657L20.2811 10.159C21.1249 9.30447 21.6891 8.23084 21.9038 7.0712C22.1185 5.91156 21.9742 4.71689 21.4888 3.63528C21.0034 2.55368 20.1983 1.63269 19.1732 0.986495C18.1481 0.340296 16.9482 -0.00270191 15.7221 1.73032e-05Z"
          fill="#FFFFFF"
        />
      </svg>
    </figure>
  );
};

export default Fav;