'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import SecondaryNavbar from '@/components/SecondaryNavbar'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const router = useRouter()
  const [sliderRef] = useKeenSlider({
    loop: true,
    slidesPerView: 1,
    mode: 'free-snap',
    spacing: 15,
  })

  return (
    <div className='max-h-screen min-h-screen flex flex-col'>
      <SecondaryNavbar />
      <section className='md:flex-row flex-col my-4 mx-9 flex justify-center gap-4'>
        <div ref={sliderRef} className='keen-slider slider'>
          <div className='keen-slider__slide'>
            <div>
              <Image
                sizes='(max-width: 765px) 100vw, 500px'
                srcset='
                /vintage-item1-300.jpg 300w,
                /vintage-item1-765.jpg 765w'
                width={100}
                height={10}
                src='/vintage-item1-765.jpg'
                className='w-full object-cover'
                alt='Vintage Car' />
            </div>
          </div>
          <div className='keen-slider__slide'>
            <div>
              <Image
                sizes='(max-width: 765px) 100vw, 500px'
                srcset='
                /vintage-item1-300.jpg 300w,
                /vintage-item1-765.jpg 765w'
                width={100}
                height={10}
                src='/vintage-item1-765.jpg'
                className='w-full object-cover'
                alt='Vintage Car' />
            </div>
          </div>
          <div className='keen-slider__slide'>
            <div>
              <Image
                sizes='(max-width: 765px) 100vw, 500px'
                srcset='
                /vintage-item1-300.jpg 300w,
                /vintage-item1-765.jpg 765w'
                width={100}
                height={10}
                src='/vintage-item1-765.jpg'
                className='w-full object-cover'
                alt='Vintage Car' />
            </div>
          </div>
        </div>
        <div className='content font-montserrat'>
          <h2 className='text-4xl mb-1 font-extrabold dark:text-white '>Brand X Vintage Car</h2>
          <h3 className='text-3xl mb-2 font-light dark:text-white '>$6000.00</h3>
          <button type='button' className='button-interested ' onClick={() => router.push('/contact')}>
            Interested?
          </button>
          <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
           ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
           ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
           sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
           est laborum.
          </p>
        </div>
      </section>
      <hr className='md:block hidden my-2 border-t-2 border-black' />
      <div className='md:flex justify-evenly gap-4 hidden'>
        <Image
          sizes='(max-width: 765px) 100vw, 400px'
          srcset='
          /vintage-item1-300.jpg 300w,
          /vintage-item1-765.jpg 765w'
          width={100}
            height={10}
          src='/vintage-item1-765.jpg'
          className='w-full'
          alt='Vintage Car' />
        <Image
          sizes='(max-width: 765px) 100vw, 400px'
          srcset='
          /vintage-item1-300.jpg 300w,
          /vintage-item1-765.jpg 765w'
          width={100}
            height={10}
          src='/vintage-item1-765.jpg'
          className='w-full'
          alt='Vintage Car' />
        <Image
          sizes='(max-width: 765px) 100vw, 400px'
          srcset='
          /vintage-item1-300.jpg 300w,
          /vintage-item1-765.jpg 765w'
          width={100}
            height={10}
          src='/vintage-item1-765.jpg'
          className='w-full'
          alt='Vintage Car' />
      </div>
    </div>
  )
}
