import page from "./page";
import { AnimeCard, AnimeProp } from "../components/AnimeCard";
import { trpc } from "../trpc/server";

// export const fetchAnime = async () => {
//   // const response = await fetch(
//   //   `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
//   // );
//   // const data = await response.json();

//   const queryResults = await trpc.getInfiniteCards.query({
//     limit: 100,
//     query: {
//       sort: "desc",
//     },
//   });

//   console.log("Query Results:", queryResults.items);
//   return queryResults.items;
// };
