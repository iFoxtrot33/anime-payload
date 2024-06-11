"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

import { AnimeCard } from "./AnimeCard";

export type AnimeCard = JSX.Element;

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeCard[]>([]);

  return (
    <>
      {data}

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
