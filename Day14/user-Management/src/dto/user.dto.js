import { z } from "zod";

export const createUserDTO = z.object({
    name: z.string().min(3, "Name must be at least 3 chars"),
    email: z.string().email("Invalid email"),
    contact: z.number().optional(),
    age: z.number().min(18, "Must be at least 18").optional(),
    city: z.string().min(2).optional(),
    isActive: z.boolean().default(true),

});

export const updateUserDTO = z.object({
    name: z.string().min(3).optional(),
    email: z.string().email().optional(),
    contact: z.number().optional(),
    age: z.number().optional(),
    city: z.string().optional(),
    isActive: z.boolean().optional(),
});