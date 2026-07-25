import { z } from 'zod';

export const contactFormSchema = z.object({
    name: z.string().trim().min(2, 'Nama must be at least 2 characters'),
    email: z.string().trim().min(1, 'Email is required').email('Please enter a valid email'),
    message: z.string().trim().min(10, 'Message must be at least 10 characters'),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;