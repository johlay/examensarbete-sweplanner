import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faBus,
  faShip,
  faTrain,
  faUser,
  faWalking,
} from "@fortawesome/free-solid-svg-icons";

// Pre-registering icon definitions so that do not have to explicitly pass them to render an icon.
library.add(fas, faBus, faShip, faTrain, faUser, faWalking);

// create a react query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
