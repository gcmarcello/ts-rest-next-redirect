import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const authContract = c.router(
  {
    login: {
      method: "POST",
      path: "/login",
      responses: {
        302: c.type<null>(),
        401: c.type<{ message: string }>(),
      },

      body: z.object({email: z.string().email(), password: z.string().min(1)}),
    },
  },
  {
    pathPrefix: "/auth",
  }
);
