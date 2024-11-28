import { tsr, TsRestResponse } from "@ts-rest/serverless/next";
import { redirect } from "next/navigation";
import { authContract } from "./auth.contract";

export const authRouter = tsr.router(authContract, {
  login: async () => redirect("/another-page")
});
