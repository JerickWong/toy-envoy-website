import Link from 'next/link'
import Image from 'next/image'

export default function SecondaryNavbar() {
  return (
    <div>
      <nav className='nav-header'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Toy Envoy Logo'
            className='dark:invert'
            width={100}
            height={24}
            priority
          />
        </Link>
      </nav>
      <nav className='nav-main'>
        <ul>
          <li>
            <Link href='/' className='active'>
              brand x
            </Link>
          </li>
          <li>
            <Link href=''>
              brand y
            </Link>
          </li>
          <li>
            <Link href=''>
              brand z
            </Link>
          </li>
          <li>
            <Link href=''>
              brand a
            </Link>
          </li>
        </ul>
      </nav>
      <hr className='m-0.5 border-t-2 border-black' />
    </div>
  )
}
