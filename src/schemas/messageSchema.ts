import {z} from "zod"

export const messageSchema = z.object({
    content : z.string()
    .min(4, "Content should not be less than 4 character")
    .max(100, "Content should not be more that 100 character")
})