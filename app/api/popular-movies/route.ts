
import { NextResponse, NextRequest } from "next/server";
export async function GET(req:NextRequest) {
  const searchParam =new URL(req.url)
  const pageNumber = searchParam.searchParams.get("page") || 1;
 
  const apiCall = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNumber}`, {
    method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`
      },
  })
  const data = await apiCall.json()
  return NextResponse.json(data)
}