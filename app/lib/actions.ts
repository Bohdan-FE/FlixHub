'use server'
import { PrismaClient } from '@prisma/client';
import { z } from 'zod'
import { hash } from 'bcrypt'
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';


const prisma = new PrismaClient()

const FormSchema = z.object({
  name: z.string({
      invalid_type_error: 'Name is required.',
      required_error: "Name is required",
  }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string({invalid_type_error: 'Password is required', required_error: "Password is required", }),
});

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    };
    message?: string | null
}

export async function register(prevState: State, formData: FormData) {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Fields to register'
        }
    }

    const { email, name, password } = validatedFields.data
    const hashedPassword = await hash(password, 10)
    
    try {
        await prisma.user.create({ data: { name, email, password: hashedPassword } })
    } catch (error) {
        return { message: 'Database Error: Failed to create user.' }
    }


}