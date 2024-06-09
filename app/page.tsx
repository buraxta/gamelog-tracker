import CardsComp from "@/components/cards";
import HeaderComp from "@/components/header";
import SearchComp from "@/components/search";
import { getAllPlayer } from "@/lib/actions";
import prisma from "@/lib/db";

export default async function Home({ searchParams }) {
  const query = searchParams?.query || "";

  let players;
  if (query) {
    players = await prisma.user.findMany({
      where: {
        name: {
          contains: query,
          mode: "insensitive",
        },
      },
    });
  } else {
    players = await getAllPlayer();
  }

  // console.log(players);
  return (
    <div className="flex justify-center flex-col space-y-3 items-center">
      <HeaderComp
        title={"Game Log Tracker"}
        subtitle={"Let's track all f the logs of your favrite player"}
      />
      <main className="max-w-screen-md w-full">
        <SearchComp />
        <CardsComp users={players} />
      </main>
    </div>
  );
}
