import Link from 'next/link'
import LogoIcon from '../../../../public/ui-movie.svg'

export default function Logo() {
    return (
        <Link className='flex items-center gap-1' href={'/'}>
            <LogoIcon className='h-8 w-8 fill-neutral-300 animate-spinSlow' />
            <p className='text-neutral-300 text-base hidden cardlisttab:block'>FlixHub</p>
        </Link>
    )
}