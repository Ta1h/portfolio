import Image from 'next/image'
import { AnimateUp } from '../utils/AnimateUp'

const Hero = () => {
  const title = <p className="sm:ml-1 sm:font-bold lg:font-semibold lg:ml-3 text-secondary ">Software Developer</p>

  return (
    <div className="lg:container lg:flex lg:justify-center lg:py-48 sm:py-10 sm:px-5">

      {/* Info */}
      <div className='py-5 sm:text-center lg:text-start flex flex-col justify-center sm:items-center lg:items-start lg:pr-5'>

        {/* Title */}
        <div className='hidden lg:block tracking-wider leading-relaxed md:text-xl lg:text-2xl lg:items-start text-white'>
          <AnimateUp>
            <h1 className="flex">
              Hello, World! I’m a {title}
            </h1>
          </AnimateUp>
          <AnimateUp>
            <h1>
              with a passion for crafting dynamic <br /> and responsive websites
            </h1>
          </AnimateUp>
        </div>

        {/* Mobile Title */}
        <AnimateUp>
          <div className='lg:hidden leading-relaxed md:text-xl sm:flex sm:flex-col sm:justify-center sm:items-center text-white'>
            <h1 className='text-xl tracking-wide font-semibold'>
              Hello, World!
            </h1>
            <h1 className='flex text-xl font-light'>
              I’m a {title}
            </h1>
            <h1 className='hidden md:block text-lg font-extralight tracking-wider'>
              with a passion for crafting dynamic and <br />responsive websites
            </h1>
            <h1 className='md:hidden text-lg font-extralight tracking-wider'>
              with a passion for crafting dynamic and responsive websites
            </h1>
          </div>
        </AnimateUp>

        {/* Divider */}
        <AnimateUp>
          <p className='mt-2 mb-6'>
            __________________
          </p>
        </AnimateUp>

        <div className='lg:hidden'>
          <AnimateUp>
            <Image src="/img1.png" width={350} height={500} alt='Image' className='rounded-xl' />
          </AnimateUp>
        </div>

        <AnimateUp>
          {/* Description */}
          <p className="tracking-wider font-light text-gray-300 sm:text-sm md:text-base sm:mt-5 lg:mt-0">
            dedicated to deliver seamless online experiences <br />through innovative design and clean, efficient code.
          </p>
        </AnimateUp>

        {/* Links */}
        <div className='flex py-5 space-x-3'>
          <AnimateUp>
            <Image src="/linkedinIcon.png" width={30} height={20} alt='linkedin' />
          </AnimateUp>
          <AnimateUp>
            <Image src="/githubIcon.png" width={30} height={30} alt='github' />
          </AnimateUp>
        </div>
      </div>

      {/* Image */}
      <div className='hidden lg:block'>
        <AnimateUp>
          <Image src="/img1.png" width={500} height={500} alt='Image' className='rounded-xl' />
        </AnimateUp>
      </div>
    </div>
  )
}

export default Hero
