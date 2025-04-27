import Image from 'next/image'
import { first_company, intern } from '../data/skills'

const Works = () => {

    return (
        <div id='Works' className="bg-secondaryBackground flex justify-center">
            <div className='sm:p-3 lg:w-3/5 space-y-32'>
                <div className='container'>
                    <div className="sm:pt-8 sm:pb-5 lg:pt-32 lg:pb-24 ">
                        <h1 className="sm:text-2xl text-4xl font-extralight font-serif tracking-wider text-center">
                            Relevant Experience
                        </h1>
                    </div>
                    <div className="sm:p-5 lg:grid lg:grid-cols-2 lg:gap-16">
                        {/** Work 1 */}
                        <div className='flex justify-end order-1'>
                            <Image src="/img1.png" width={500} height={500} alt='Image' className='rounded-xl ' />
                        </div>
                        <div className=' order-3 space-y-8'>
                            <div className='space-y-2'>
                                <h1 className='sm:text-xl sm:pt-3 text-2xl font-medium tracking-wide '>
                                    Associate Software Developer 
                                </h1>
                                <h1 className='sm:text-lg text-xl italic text-secondary'>
                                    Northeast Business Solutions
                                </h1>
                                <h1 className=' text-secondary'>
                                    July 2024 - Present
                                </h1>
                            </div>
                            <div className='flex flex flex-wrap gap-2 space-x-1'>
                                {intern.map((skill, index) => (
                                    <div key={index} >
                                        <skill.icon className={`sm:text-xl text-2xl ${skill.color}`} />
                                    </div>
                                ))}
                            </div>
                            <div className='sm:pb-8 space-y-2 text-gray-300 font-light tracking-wide'>
                                <p>
                                    Responsibilities:
                                </p>
                                <ul className='sm:text-sm list-disc list-inside space-y-1'>
                                    <li>Developed new modules and features for HRM, Time Managemeng, and Payroll Systems</li>
                                    <li>Fixed bugs across the frontend, backend, and database SQL</li>
                                    <li>Improved performance and reliability through code optimization and refactoring</li>
                                    <li>Collaborated with developers to enhance existing modules and add new functionalities</li>
                                    <li>Contributed to maintaining clean, scalable, and efficient code across projcets</li>
                                </ul>
                            </div>
                        </div>

                        {/** Work 2 */}
                        <div className='order-3 space-y-8'>
                            <div className='lg:hidden flex justify-start order-4'>
                                <Image src="/img1.png" width={500} height={500} alt='Image' className='rounded-xl' />
                            </div>
                            <div className='space-y-2'>
                                <h1 className='sm:text-xl text-2xl font-medium tracking-wide '>
                                    Web Developer Intern
                                </h1>
                                <h1 className='sm:text-lg text-xl italic text-secondary'>
                                    On Pal Express IT Solutions Inc.
                                </h1>
                                <h1 className=' text-secondary'>
                                    February 2024 - May 2024
                                </h1>
                            </div>
                            <div className='flex flex-wrap gap-2 lg:space-x-3'>
                                {first_company.map((skill, index) => (
                                    <div key={index}>
                                        <skill.icon className={`sm:text-xl text-2xl ${skill.color}`} />
                                    </div>
                                ))}
                            </div>
                            <div className='space-y-2 text-gray-300 font-light tracking-wide'>
                                <p>
                                    Responsibilities:
                                </p>
                                <ul className='sm:text-sm list-disc list-inside space-y-1'>
                                    <li>Innovate using React.js and Material UI for better design and smooth user transaction</li>
                                    <li>Developed a dynamic meeting page that resembles zoom for inspiration for future company use</li>
                                    <li>Design and developed a dynamic course page and quiz forms for users with admin panel</li>
                                    <li>Utilized API&apos;s using Reach Hooks for data integration and management</li>
                                </ul>
                            </div>
                        </div>
                        <div className='hidden lg:block flex justify-start order-4'>
                            <Image src="/img1.png" width={500} height={500} alt='Image' className='rounded-xl' />
                        </div>

                    </div>
                </div>

                {/** Character Reference */}
                {/* <div className="container py-20">
                    <h1 className="text-4xl font-extralight font-serif tracking-wider text-center">
                        Character Reference
                    </h1>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div> */}
            </div>
        </div>
    )
}

export default Works
