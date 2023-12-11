'use client'

import { register } from "@/app/lib/actions";
import { useFormState } from "react-dom";

function RegisterForm() {
    const initialState = { message: null, errors: {} }
    const [state, dispatch] = useFormState(register, initialState)

    return (<form className='flex flex-col' action={dispatch}>
        <label htmlFor='name'>
            Name
        </label>
        <input type="text" id='name' name="name" />
        <label htmlFor='email'>
            Email
        </label>
        <input type="email" id='email' name="email" />
        <label htmlFor='password'>
            Password
        </label>
        <input type="password" id='password' name="password" />
        <button type="submit">SignIn</button>
    </form>);
}

export default RegisterForm;