import { NextResponse } from "next/server";

export async function GET() {
  const req = await fetch(
    "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  );

  const data = await req.json();

  return NextResponse.json(data);
}
