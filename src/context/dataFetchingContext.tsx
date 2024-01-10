import React from "react";
import { QueryClientProvider } from "react-query";
import { ChildrenDefaultProps } from "../interfaces/children";
import reactQueryClient from "../config/react-query-client";

function DataFetchingProvider({ children }: ChildrenDefaultProps) {
    return (
        <QueryClientProvider client={reactQueryClient}>
            {children}
        </QueryClientProvider>
    );
}

export default DataFetchingProvider;
