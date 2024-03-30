'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import styles from './Header.module.scss'
import { signOut, useSession } from "next-auth/react";
import SearchBar from "../SearchBar/SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";



function Header() {
    const pathname = usePathname()
    const { data } = useSession()
    const [isActive, setIsActive] = useState(false)

    return (
        <header className="text-neutral-400 text-xl relative">
            <div className="flex flex-col max-w-7xl mx-auto justify-between px-4 py-6">
                <div className="flex items-center justify-between w-full gap-4">
                    <p>LOGO</p>
                    <SearchBar />
                    <button className="shrink-0 w-10 h-10 flex items-center justify-center" onClick={() => setIsActive(!isActive)}>{!isActive ? <RxHamburgerMenu className=" w-full h-full" /> : <RxCross2 className=" w-full h-full" />}</button>
                </div>
                {isActive && <nav className='w-[100vw] bg-neutral-900 absolute top-full z-[100] h-[100vh]'>
                    <ul className={`flex gap-8 flex-col p-8 items-center text-3xl`}>
                        <li className="relative"><Link className={pathname === '/' || pathname.includes('/movies') ? styles.activeLink : styles.link} href={'/'} onClick={() => setIsActive(false)}>Movies</Link></li>
                        <li className="relative"><Link className={pathname.includes('/tv') ? styles.activeLink : styles.link} href={'/tv'} onClick={() => setIsActive(false)}>TV shows</Link></li>
                        {!data && <>
                            <ul className="flex gap-2" onClick={() => setIsActive(false)}>
                                <li className="relative"><Link className={pathname === '/login' ? styles.activeLink : styles.link} href={'/login'}>Login</Link></li>
                                <span className="block w-[1px] h-[28px] bg-neutral-400"></span>
                                <li className="relative"><Link className={pathname === '/register' ? styles.activeLink : styles.link} href={'/register'}>Signup</Link></li>
                            </ul>
                        </>}
                        {data && <>
                            <li className="relative"><Link className={pathname.includes('/favorite') ? styles.activeLink : styles.link} href={'/favorite'} onClick={() => setIsActive(false)}>Favorite</Link></li>
                            <li className="relative"><button className={styles.link} onClick={() => signOut({ redirect: true })}>Log out</button></li>
                        </>
                        }
                    </ul>
                </nav>}
            </div>
        </header >
    );
}

export default Header;