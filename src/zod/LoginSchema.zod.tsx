import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email("Please Enter correct Email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters!")
      .max(16, "Password is too long!")
      .regex(/[0-9]/, "It must be include at least one number")
      .regex(
        /[@$#!]/,
        "It must be include at least one of these (@,!,#,$)character",
      ),
  });