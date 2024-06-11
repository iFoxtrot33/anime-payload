"use client";
import React from "react";
import AnimeCard, { AnimeProp } from "../components/AnimeCard";
import { trpc } from "../trpc/client";

const TestCards = () => {
  const { data: queryResults } = trpc.getInfiniteCards.useInfiniteQuery(
    {
      limit: 10,
      query: {},
    },
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  );

  const cards = queryResults?.pages.flatMap((page) => page.items);
  console.log(cards);

  return (
    <>
      <div className="flex flex-row gap-20">
        {cards &&
          cards.map((item: AnimeProp, index: number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
      </div>
    </>
  );
};

export default TestCards;
