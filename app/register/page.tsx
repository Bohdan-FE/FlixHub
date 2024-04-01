import { getServerSession } from "next-auth";
import RegisterForm from "../UI/components/RegisterForm/RegisterForm";
import { authOptions } from "../lib/auth";
import { redirect } from 'next/navigation';


async function Page() {
    const session = await getServerSession(authOptions)
    if (session) {
        redirect('/')
    }

    return (
        <RegisterForm />
    );
}

export default Page;