import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "./index";

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
    }),
  ],
});
