import Image from 'next/image'
import { capstone, intern } from '../data/skills'

const Works = () => {

    return (
        <div id='Works' className="bg-secondaryBackground flex justify-center">
            <div className='w-3/5 space-y-32'>
                <div className='container'>
                    <div className=" pt-32 pb-24 ">
                        <h1 className="text-4xl font-extralight font-serif tracking-wider text-center">
                            Relevant Experience
                        </h1>
                    </div>
                    <div className=" grid grid-cols-2 gap-16">
                        {/** Work 1 */}
                        <div className='flex justify-end order-1'>
                            <Image src="/img1.png" width={500} height={500} alt='Image' className='rounded-xl ' />
                        </div>
                        <div className=' order-3 space-y-8'>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-medium tracking-wide '>
                                    Front End Developer Intern
                                </h1>
                                <h1 className='text-xl italic text-secondary'>
                                    On Pal Express IT Solution Inc.
                                </h1>
                                <h1 className=' text-secondary'>
                                    Feb 2024 - May 2024
                                </h1>
                            </div>
                            <div className='flex space-x-3'>
                                {intern.map((skill, index) => (
                                    <div key={index}>
                                        <skill.icon className={`text-2xl ${skill.color}`} />
                                    </div>
                                ))}
                            </div>
                            <div className='space-y-2 text-gray-300 font-light tracking-wide'>
                                <p>
                                    Responsibilities:
                                </p>
                                <ul className='list-disc list-inside space-y-1'>
                                    <li>Developed and maintained the company's website</li>
                                    <li>Collaborated with the team to create a responsive design</li>
                                    <li>Optimized the website for SEO</li>
                                </ul>
                            </div>
                        </div>

                        {/** Work 2 */}
                        <div className=' order-3 space-y-8'>
                            <div className='space-y-2'>
                                <h1 className='text-2xl font-medium tracking-wide '>
                                    Full Stack Web Developer
                                </h1>
                                <h1 className='text-xl italic text-secondary'>
                                    Capstone Project
                                </h1>
                                <h1 className=' text-secondary'>
                                    Aug 2023 - Dec 2023
                                </h1>
                            </div>
                            <div className='flex space-x-3'>
                                {capstone.map((skill, index) => (
                                    <div key={index}>
                                        <skill.icon className={`text-2xl ${skill.color}`} />
                                    </div>
                                ))}
                            </div>
                            <div className='space-y-2 text-gray-300 font-light tracking-wide'>
                                <p>
                                    Responsibilities:
                                </p>
                                <ul className='list-disc list-inside space-y-1'>
                                    <li>Developed and maintained the company's website</li>
                                    <li>Collaborated with the team to create a responsive design</li>
                                    <li>Optimized the website for SEO</li>
                                </ul>
                            </div>
                        </div>
                        <div className='flex justify-start order-4'>
                            <Image src="/img1.png" width={500} height={500} alt='Image' className='rounded-xl' />
                        </div>

                    </div>
                </div>

                {/** Character Reference */}
                <div className="container py-20">
                    <h1 className="text-4xl font-extralight font-serif tracking-wider text-center">
                        Character Reference
                    </h1>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        </div>
    )
}

export default Works
