'use client'

import { useFormState } from "react-dom";
import SubmitButton from "../buttons";
import styles from '../RegisterForm/RegisterForm.module.scss'
import clsx from 'clsx'
import { login } from "@/app/lib/loginAction";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

function LoginForm() {
    const [isVisiblePassword, setIsVisiblePassword] = useState<Boolean>(false)
    const router = useRouter()
    const initialState = {
        message: '', errors: undefined, fieldValues: {
            email: '',
            password: ''
        }
    }
    const [formState, dispatch] = useFormState(login, initialState)

    return (
        <form className='flex flex-col px-6 py-14 max-w-md mx-auto bg-neutral-800' action={dispatch}>
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
            <div className="relative">
                <input className={styles.input} type={isVisiblePassword ? 'text' : 'password'} id='password' name="password" defaultValue={formState.fieldValues?.password} aria-describedby="password-error" placeholder="Password" />
                {isVisiblePassword ? <FiEye className="absolute top-[0] right-4 h-[100%] w-5 cursor-pointer" onClick={() => setIsVisiblePassword(false)} /> :
                    <FiEyeOff className="absolute top-[0] right-4 h-[100%] w-5 cursor-pointer" onClick={() => setIsVisiblePassword(true)} />}
            </div>
            <div className="mb-4" id='password-error' aria-live='polite' aria-atomic='true'>
                {formState.errors?.password && formState.errors?.password.map((error: string) => (
                    <p className={styles.errorInput} key={error}>{error}</p>
                ))}
            </div>
            <SubmitButton title='Sign In' />
        </form>
    )
}

export default LoginForm