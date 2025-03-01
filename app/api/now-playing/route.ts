import { NextResponse } from "next/server";

export async function GET() {

  const apiCall = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", {
    method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`
      },
  })

  const data = await apiCall.json()

  return NextResponse.json(data)
}