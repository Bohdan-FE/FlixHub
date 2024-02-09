import Link from "next/link";


async function Header() {
    return (
        <header className="mb-4">
            <div className="flex max-w-4xl mx-auto justify-between px-4 py-6">
                <p>LOGO</p>
                <nav>
                    <ul className="flex gap-8">
                        <li><Link href={'/'}>Movies</Link></li>
                        <li><Link href={'/serials'}>TV shows</Link></li>
                        <ul className="flex gap-1">
                            <li><Link href={'/login'}>Login</Link></li>
                            <li><Link href={'/register'}>Signup</Link></li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;