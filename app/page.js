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
      <div className="row">
        <div className='image-row'>
          <Image
            src="/vintage-car.jpg"
            alt="Toy Envoy Logo"
            className="h-full object-cover"
            width={1000}
            height={10}
          />
          <div className='image-caption'>
            <Link href="/cars" className="caption">
              cars
            </Link>
          </div>
        </div>
        <div className='image-row'>
          <Image
            src="/cube.jpeg"
            alt="Cube"
            className="h-full object-cover"
            width={1000}
            height={10}
          />
          <div className='image-caption'>
            <Link href="/collectibles" className="caption">
              collectibles
            </Link>
          </div>
        </div>
        {/* <nav className="flex items-between justify-center absolute w-full bottom-50">
        </nav> */}
        
      </div>
    </div>
  )
}
