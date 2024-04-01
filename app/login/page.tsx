import { getServerSession } from "next-auth";
import LoginForm from "../UI/components/LoginForm/LoginForm";
import { authOptions } from "../lib/auth";
import { redirect } from 'next/navigation';



async function Page() {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect('/')
    }
    return (
        <LoginForm />
    );
}

export default Page;