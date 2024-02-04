'use client'

import { useEffect, useRef } from "react";
import { useFormState } from "react-dom";
import SubmitButton from "../buttons";
import styles from '../RegisterForm/RegisterForm.module.scss'
import clsx from 'clsx'
import { login } from "@/app/lib/loginAction";
import { signIn } from "next-auth/react";

function LoginForm() {
    const initialState = {
        message: '', errors: undefined, fieldValues: {
            email: '',
            password: ''
        }
    }
    const [formState, dispatch] = useFormState(login, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (formState.message === 'User created') {
            formRef.current?.reset()
        }
    }, [formState])

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = await signIn('credentials', { email: 'email@email.com', password: '123456' })
        console.log(data)
    }

    return (
        <form className='flex flex-col px-6 py-14 max-w-md mx-auto bg-neutral-800' onSubmit={onSubmit} ref={formRef}>
            <h3 className='text-3xl text-center text-neutral-300 border-b border-neutral-300 pb-3 mb-5'>SIGN IN</h3>
            {formState.message && <div className={clsx('border-solid border-neutral-300 border-2 p-3 mb-2 text-neutral-300 rounded-xl', {
                'border-red-300 p-3 mb-3 ': formState.message !== ''
            })}>{formState.message && <p className="text-center text-red-300">{formState.message}</p>}</div>}
            <input className={styles.input} type="text" id='email' name="email" defaultValue={formState.fieldValues?.email} aria-describedby="email-error" placeholder="Email address" />
            <div className="mb-4" id='email-error' aria-live='polite' aria-atomic='true'>
                {formState.errors?.email && formState.errors?.email.map((error: string) => (
                    <p className={styles.errorInput} key={error}>{error}</p>
                ))}
            </div>
            <input className={styles.input} type="password" id='password' name="password" defaultValue={formState.fieldValues?.password} aria-describedby="password-error" placeholder="Password" />
            <div className="mb-4" id='password-error' aria-live='polite' aria-atomic='true'>
                {formState.errors?.password && formState.errors?.password.map((error: string) => (
                    <p className={styles.errorInput} key={error}>{error}</p>
                ))}
            </div>
            <SubmitButton title='SignIn' />
        </form>
    )
}

export default LoginForm