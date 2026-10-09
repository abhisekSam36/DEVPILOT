"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import react from "react"

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
    const [query] = react.useState(() => new QueryClient());
    return <QueryClientProvider client={query}>{children}</QueryClientProvider>;
};

QueryProvider.displayName = "QueryProvider";

export default QueryProvider