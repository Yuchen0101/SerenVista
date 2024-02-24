import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback} // 'ErrorFallback' is a component, it automatically receives 2 arguments: error + resetErrorBoundary
      onReset={() => window.location.replace("/")} // specify the actual 'resetErrorBoundary' function
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
