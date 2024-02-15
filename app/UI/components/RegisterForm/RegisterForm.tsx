'use client'

import { register } from "@/app/lib/registerAction";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { SubmitButton } from "../buttons";
import styles from './RegisterForm.module.scss'
import clsx from 'clsx'
import { useRouter } from "next/navigation";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";


function RegisterForm() {
    const [isVisiblePassword, setIsVisiblePassword] = useState<Boolean>(false)
    const [isVisibleRepeatPassword, setIsVisibleRepeatPassword] = useState<Boolean>(false)
    const initialState = {
        message: '', errors: undefined, fieldValues: {
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    }
    const [formState, dispatch] = useFormState(register, initialState)
    const router = useRouter()

    useEffect(() => {
        if (formState.message === 'User created') {
            router.push('/login')
        }
    }, [formState])

    return (
        <form className='flex flex-col px-6 py-14 max-w-md mx-auto bg-neutral-800' action={dispatch}>
            <h3 className='text-3xl text-center text-neutral-300 border-b border-neutral-300 pb-3 mb-5'>SIGN UP</h3>
            {formState.message && <div className={clsx('border-solid border-neutral-300 border-2 p-3 mb-2 text-neutral-300 rounded-xl', {
                'border-red-300 p-3 mb-3 text-red-300': formState.message !== 'User created'
            })}>{formState.message && <p className="text-center ">{formState.message}</p>}</div>}
            <input className={styles.input} autoComplete="on" type="text" id='name' name="name" defaultValue={formState.fieldValues?.name} aria-describedby="name-error" placeholder="Your Name" />
            <div className="mb-4" id='name-error' aria-live='polite' aria-atomic='true'>
                {formState.errors?.name && formState.errors?.name.map((error: string) => (
                    <p className={styles.errorInput} key={error}>{error}</p>
                ))}
            </div>
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
            <div className="relative">
                <input className={styles.input} type={isVisibleRepeatPassword ? 'text' : 'password'} id='repeat-password' name="repeat-password" defaultValue={formState.fieldValues?.repeatPassword} aria-describedby="repeat-password-error" placeholder="Confirm password" />
                {isVisibleRepeatPassword ? <FiEye className="absolute top-[0] right-4 h-[100%] w-5 cursor-pointer" onClick={() => setIsVisibleRepeatPassword(false)} /> :
                    <FiEyeOff className="absolute top-[0] right-4 h-[100%] w-5 cursor-pointer" onClick={() => setIsVisibleRepeatPassword(true)} />}
            </div>
            <div className="mb-4" id='repeat-password-error' aria-live='polite' aria-atomic='true'>
                {formState.errors?.repeatPassword && formState.errors?.repeatPassword.map((error: string) => (
                    <p className={styles.errorInput} key={error}>{error}</p>
                ))}
            </div>
            <SubmitButton title='Sign Up' />
        </form>);
}

export default RegisterForm;