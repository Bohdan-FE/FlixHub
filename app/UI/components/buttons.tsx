import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus()
    return (<button>{pending ? 'pending' : 'signin'}</button>);
}

export default SubmitButton;