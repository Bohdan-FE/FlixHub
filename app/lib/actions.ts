'use server'
import { z } from 'zod'
import { hash } from 'bcrypt'
import { prisma } from './prisma';


const requiredString = z.string().refine(data => data.trim().length > 0, {
  message: 'This field is required.',
});

const FormSchema = z.object({
  name: z.string().min(4, {message:'Name must have more than 4 character'}),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {message: 'Password must have more than 6 characters'}),
});

export type State = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
    };
    message?: null | string;
    fieldValues?: {
        name?: string,
        email?: string,
        password?: string
    }
}

export async function register(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: null,
            fieldValues: {
                name: '',
                email: '',
                password: '',
            }
        }
    }

    const { email, name, password } = validatedFields.data
    const hashedPassword = await hash(password, 10)
    
    try {
        const user = await prisma.user.findUnique({ where: { email } })
        if (user) {
            return {message: 'Email already exists'}
        }
        await prisma.user.create({ data: { name, email, password: hashedPassword } })
        return {message: null}
    } catch (error) {
        return {
            message: 'Data Base error', fieldValues: {
                name,
                email,
                password
        } }
    }
}