import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { trpc } from "@/client";
import SuperJSON from "superjson";

interface Props {
  children: React.ReactNode;
}

const TrpcProvider = ({ children }: Props) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          transformer: SuperJSON,
          url: "/trpc",
          // You can pass any HTTP headers you wish here
          headers() {
            return {
              //   authorization: getAuthCookie(),
              authorization: "test",
            };
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default TrpcProvider;
