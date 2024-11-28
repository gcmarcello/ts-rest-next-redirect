"use server";
import { authContract } from "@/auth.contract";
import { authRouter } from "@/auth.router";
import {
  createNextHandler,
  RequestValidationError,
  TsRestResponseError,
} from "@ts-rest/serverless/next";

export type ErrorType = {
  status: number;
  body: { message: string };
};

export const handler = createNextHandler(
  {
    auth: authContract,
  },
  {
    auth: authRouter,
  },
  {
    basePath: "/api/",
    jsonQuery: true,
    responseValidation: true,
    handlerType: "app-router",
  }
);

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
  handler as OPTIONS,
};
