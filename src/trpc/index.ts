import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import { QueryValidator } from "../lib/validators/query-validators";
import { getPayloadClient } from "../get-payload";

export const appRouter = router({
  getInfiniteCards: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100),
        cursor: z.number().nullish(),
        query: QueryValidator,
      })
    )
    .query(async ({ input }) => {
      const { query, cursor } = input;
      const { sort, limit, ...queryOpts } = query;

      const payload = await getPayloadClient();

      const page = cursor || 1;

      const {
        docs: items,
        hasNextPage,
        nextPage,
      } = await payload.find({
        collection: "cards",
        sort,
        depth: 1,
        limit,
        page,
        fields: ["id", "name", "episodes", "rating", "card_image.url"],
      });

      return {
        items,
        nextPage: hasNextPage ? nextPage : null,
      };
    }),
});

export type AppRouter = typeof appRouter;
