"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import {tsr} from "./tsr"

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <tsr.ReactQueryProvider>{children}</tsr.ReactQueryProvider>
    </QueryClientProvider>
  );
}
