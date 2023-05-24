import Link from 'next/link';
import Image from 'next/image'

export default function Home() {
  return (
    <div className='max-h-screen min-h-screen flex flex-col'>
      <nav className="flex items-center justify-center">
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
      <hr class="m-2 border-t-4 border-black" />
      <div className="flex items-center justify-center overflow-hidden relative">
        <Image
          src="/vintage-car.jpg"
          alt="Toy Envoy Logo"
          className="object-fill aspect-4/5 w-2/4"
          width={1000}
          height={10}
        />
        <Image
          src="/cube.jpeg"
          alt="Cube"
          className="object-fill aspect-4/5 w-2/4"
          width={1000}
          height={10}
        />
        <nav className="flex items-between justify-center absolute w-full bottom-50">
          <div className='flex flex-1 justify-center'>
            <Link href="/cars" className="p-2 text-white text-7xl font-montserrat hover:scale-110 transition-transform border-2 px-28 duration-300">
              cars
            </Link>
          </div>
          <div className='flex flex-1 justify-center'>
            <Link href="/collectibles" className="p-2 text-white text-7xl font-montserrat hover:scale-110 transition-transform border-2 px-28 duration-300">
              collectibles
            </Link>
          </div>
        </nav>
        
      </div>
    </div>
  )
}
