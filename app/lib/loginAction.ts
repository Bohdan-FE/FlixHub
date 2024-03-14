import { z } from 'zod'
import { signIn } from 'next-auth/react';


const FormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, {message: 'Password must have more than 6 characters'}),
});

export type State = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    message?: null | string;
    fieldValues?: {
        email?: string,
        password?: string
    }
}

export async function login(prevState: State, formData: FormData): Promise<State> {
    const validatedFields = FormSchema.safeParse({
        email: formData.get('email'),
        password: formData.get('password')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: null,
            fieldValues: {
                email: '',
                password: '',
            }
        }
    }

    const { email, password } = validatedFields.data
    try {
        const signInData = await signIn('credentials', { email, password, redirect: false })
        if (signInData?.error) {
            return {message: 'Password or email incorect'}
        }
        return {message: 'loged in'}
    } catch (error) {
        return {
            message: 'Data Base error', fieldValues: {
                email,
                password
        } }
    }
}