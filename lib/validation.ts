import { z } from "zod";

export const userFormValidation = z.object({
    name: z.string()
        .min(2,"Name Must be at least 2 characters")
        .min(50,"Name Must be at most 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z.string().refine(value => /^[6-9]\d{9}$/.test(value), {
        message: "Invalid phone number",
    })

  })