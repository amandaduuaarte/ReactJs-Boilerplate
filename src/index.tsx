import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import DataFetchingProvider from "./context/dataFetchingContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <DataFetchingProvider>
            <App />
        </DataFetchingProvider>
    </React.StrictMode>
);
