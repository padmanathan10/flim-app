import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { auth } from "@/lib/auth";

export async function POST(request: NextRequest, response: NextResponse) {
  // get the body of the request
  const body = await request.json();
  console.log("body", body);

  // get the movie id from the body
  const { movieId } = body;

  // get the session
  const session = await auth();
  console.log("session", session);

  // create a new fav in db with the movie id and the user id
  const newFav = await db.favourite.create({
    data: {
      movieId,
      userId: session?.user?.id!,
    },
  });

  return NextResponse.json({
    newFav,
  });
}

export async function GET() {
  const session = await auth();
  const favs = await db.favourite.findMany({
    where: {
      userId: session?.user?.id!,
    },
  });
  return NextResponse.json({
    favs,
  });
}
