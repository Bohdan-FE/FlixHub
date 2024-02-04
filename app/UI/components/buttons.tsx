import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton({ title }: { title: string }) {
    const { pending } = useFormStatus()
    return (<button>{pending ? 'pending' : title}</button>);
}

export default SubmitButton;