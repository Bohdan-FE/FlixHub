'use client'

import { register } from "@/app/lib/actions";
import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

function RegisterForm() {
    const initialState = {
        message: '', errors: undefined, fieldValues: {
            name: '',
            email: '',
            password: ''
        }
    }
    const [formState, dispatch] = useFormState(register, initialState)
    const formRef = useRef<HTMLFormElement>(null)
    const formstatus = useFormStatus()
    useEffect(() => {
        if (formState.message === 'User created') {
            formRef.current?.reset()
        }
    }, [formState])
    console.log(formstatus)
    return (
        <form className='flex flex-col p-2 max-w-sm' action={dispatch} ref={formRef}>
            <h3 className='text-3xl text-center mb-2'>Registration</h3>
            {formState.message !== '' && <div className="border-solid border-black border-2 p-3 mb-2">{formState.message && <p className="text-center">{formState.message}</p>}</div>}
            <label className="block" htmlFor='name'>
                Name
            </label>
            <input type="text" id='name' name="name" defaultValue={formState.fieldValues?.name} aria-describedby="name-error" />
            <div className="mb-2" id='name-error' aria-live='polite' aria-atomic='true'>
                {formState.errors?.name && formState.errors?.name.map((error: string) => (
                    <p key={error}>{error}</p>
                ))}
            </div>
            <label className="block" htmlFor='email' >
                Email
            </label>
            <input type="email" id='email' name="email" defaultValue={formState.fieldValues?.email} aria-describedby="email-error" />
            <div className="mb-2" id='email-error' aria-live='polite' aria-atomic='true'>
                {formState.errors?.email && formState.errors?.email.map((error: string) => (
                    <p key={error}>{error}</p>
                ))}
            </div>
            <label className="block" htmlFor='password'>
                Password
            </label>
            <input type="password" id='password' name="password" defaultValue={formState.fieldValues?.password} aria-describedby="password-error" />
            <div className="mb-2" id='password-error' aria-live='polite' aria-atomic='true'>
                {formState.errors?.password && formState.errors?.password.map((error: string) => (
                    <p key={error}>{error}</p>
                ))}
            </div>
            <button type="submit">fjeivei</button>
        </form>);
}

export default RegisterForm;