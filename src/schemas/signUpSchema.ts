import {z} from 'zod';

export const usernameValidation = z.string()
.min(3, "username must not less tha 3 character").
max(20, "username must not more than 20 character")

export const signUpSchema = z.object({
    username : usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(6, {message: "Password must not less than 6 character"})
})