import {z} from "zod";

export const createProductSchema = z.object({
    title: z.string({
        required_error: "Title is required",
    }),
    description: z.string({
        required_error: "Description must be a string"
    }),
    image: z.string({
        required_error: "Image is required",
    }).url({
        required_error: "Url is required"
    }),
    price: z.string({
        required_error: "Price is required",
    }),
})