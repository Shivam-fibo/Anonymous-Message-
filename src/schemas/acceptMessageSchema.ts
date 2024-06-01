import {z} from 'zod';

const AcceptMessageSchema = z.object({
    acceptMessage : z.boolean()
})