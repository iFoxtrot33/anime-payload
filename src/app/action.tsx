"use server";

import page from "./page";
import { AnimeCard, AnimeProp } from "../components/AnimeCard";
import { trpc } from "../trpc/server";

export const fetchAnime = async (page: number) => {
  // const response = await fetch(
  //   `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  // );
  // const data = await response.json();
  // const queryResults = await trpc.getInfiniteCards.query({
  //   limit: 10,
  //   cursor: null,
  //   query: {
  //     sort: "desc",
  //   },
  // });
  // console.log("Query Results:", queryResults.items);
  // const finalData = queryResults.items;
  // return finalData.map((item: AnimeProp, index: number) => (
  //   <AnimeCard key={item.id} anime={item} index={index} />
  // ));
};
