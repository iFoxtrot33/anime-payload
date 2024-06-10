"use client";
import React from "react";
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

  return <div></div>;
};

export default TestCards;
