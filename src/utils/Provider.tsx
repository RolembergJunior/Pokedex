'use client'

import { useState } from "react"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";

export default function Providers({ children }:React.PropsWithChildren){
     const [queryClient] = useState(() => new QueryClient({
              defaultOptions: {
                queries: {
                  // With SSR, we usually want to set some default staleTime
                  // above 0 to avoid refetching immediately on the client
                  staleTime: 60 * 1000,
                },
              },
            }),
        )
    
    return(
       <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false}/>
            { children }
       </QueryClientProvider> 
     )
}

