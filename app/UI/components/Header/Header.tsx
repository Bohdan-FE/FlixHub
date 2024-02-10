'use client'
import Link from "next/link";
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss'



function Header() {
    const pathname = usePathname()

    return (
        <header className="mb-4 text-neutral-400 text-xl">
            <div className="flex max-w-6xl mx-auto justify-between px-4 py-6">
                <p>LOGO</p>
                <nav>
                    <ul className="flex gap-8">
                        <li className="relative"><Link className={pathname === '/' ? styles.activeLink : styles.link} href={'/'}>Movies</Link></li>
                        <li className="relative"><Link className={pathname === '/serials' ? styles.activeLink : styles.link} href={'/serials'}>TV shows</Link></li>
                        <ul className="flex gap-2">
                            <li className="relative"><Link className={pathname === '/login' ? styles.activeLink : styles.link} href={'/login'}>Login</Link></li>
                            <span className="block w-[1px] h-full bg-neutral-400"></span>
                            <li className="relative"><Link className={pathname === '/register' ? styles.activeLink : styles.link} href={'/register'}>Signup</Link></li>
                        </ul>
                    </ul>
                </nav>
            </div>
        </header >
    );
}

export default Header;