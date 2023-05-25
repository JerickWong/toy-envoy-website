import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-h-screen min-h-screen flex flex-col'>
      <nav className='nav-header'>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Toy Envoy Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </Link>
      </nav>
      <nav className='nav-main'>
        <ul>
          <li>
            <Link href="/" className='active'>
              brand x
            </Link>
          </li>
          <li>
            <Link href="">
              brand y
            </Link>
          </li>
          <li>
            <Link href="">
              brand z
            </Link>
          </li>
          <li>
            <Link href="">
              brand a
            </Link>
          </li>
        </ul>
      </nav>
      <hr className="m-0.5 border-t-2 border-black" />
      <section className='my-4 mx-9 flex justify-center gap-4'>
        <div>
          <img
            sizes="(max-width: 765px) 100vw, 500px"
            srcset="
            vintage-item1-300.jpg 300w,
            vintage-item1-765.jpg 765w"
            src="vintage-item1-765.jpg"
            alt="" />
        </div>
        <div className='flex flex-col max-w-half-screen'>
          <h2 className='text-4xl mb-1 font-extrabold dark:text-white" font-montserrat'>Brand X Vintage Car</h2>
          <h3 class="text-3xl mb-2 font-light dark:text-white font-montserrat">$6000.00</h3>
          <button type="button" class="button-interested font-montserrat">Interested?</button>
          <p className='font-montserrat'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>
      <hr className="my-2 border-t-2 border-black" />
      <div className='flex justify-evenly'>
        <img
          sizes="(max-width: 765px) 100vw, 400px"
          srcset="
          vintage-item1-300.jpg 300w,
          vintage-item1-765.jpg 765w"
          src="vintage-item1-765.jpg"
          alt="" />
        <img
          sizes="(max-width: 765px) 100vw, 400px"
          srcset="
          vintage-item1-300.jpg 300w,
          vintage-item1-765.jpg 765w"
          src="vintage-item1-765.jpg"
          alt="" />
        <img
          sizes="(max-width: 765px) 100vw, 400px"
          srcset="
          vintage-item1-300.jpg 300w,
          vintage-item1-765.jpg 765w"
          src="vintage-item1-765.jpg"
          alt="" />
      </div>
    </div>
  )
}
