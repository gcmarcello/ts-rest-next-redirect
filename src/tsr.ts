import { initTsrReactQuery } from "@ts-rest/react-query/v5";
import { contract } from "./contract";

export const tsr = initTsrReactQuery(contract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: {
    "x-app-source": "ts-rest",
  },
});
