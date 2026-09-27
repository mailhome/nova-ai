import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
    email: z.string().email({ message: 'Please enter a valid email address' }),
    company: z.string().optional(),
    phone: z.string().optional(),
    helpWith: z.string().min(1, { message: 'Please select what you need help with' }),
    message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
})

export type contactFormValues = z.infer<typeof contactFormSchema>