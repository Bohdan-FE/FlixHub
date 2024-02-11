import { getServerSession } from "next-auth";
import LoginForm from "../UI/components/LoginForm/LoginForm";
import { authOptions } from "../lib/auth";


async function Page() {
    const session = await getServerSession(authOptions)
    if (session) return
    return (
        <div>
            <LoginForm />
        </div>
    );
}

export default Page;