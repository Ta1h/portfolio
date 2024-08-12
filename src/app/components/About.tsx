import Image from "next/image";
import { backEnd, frontEnd, others } from "../data/skills";
import { AnimateLeft, AnimateRight, AnimateUp } from "../utils/AnimateUp";
import Quote from "./Quote";

const About = () => {

    return (
        <div id="About" className="bg-grained flex justify-center lg:pt-48 lg:pb-36">
            <div className="grid grid-cols-2 lg:gap-20 lg:px-40">

                {/** About me */}
                <div className="flex justify-center">
                    <AnimateRight>
                        <Image src="/gradPic.jpg" alt="hero" width={350} height={500} className="rounded-xl" />
                    </AnimateRight>
                </div>

                <AnimateLeft>
                    <div className="bg-grained p-5">
                        <h1 className="text-3xl tracking-wider mb-10 font-serif">
                            Who am I?
                        </h1>
                        <p className="tracking-wide leading-relaxed text-gray-400">
                            Hello there my name is Ralph C. Ta-oc, I recently graduated from Bulacan State University with a degree in Information Technology.
                            <br />
                            <br />
                            During my internship at On Pal Express, I worked on projects that honed my skills in UI design using React and handling APIs with React hooks. Collaborating with co-interns taught me the importance of teamwork, communication, and problem-solving. This experience shaped my understanding of the industry and solidified my passion for technology.
                            <br />
                            <br />
                            My passion for technology drives me to continuously learn and innovate. I am committed to leveraging my skills and knowledge to solve real-world problems and contribute to the tech community.
                            <br />
                            <br />
                            Looking ahead, I aspire to make a meaningful impact in the industry and help shape the future of technology.
                        </p>
                    </div>
                </AnimateLeft>

                {/** Quote */}
                <div className="flex justify-center col-span-2">
                    <AnimateUp>
                        <Quote />
                    </AnimateUp>
                </div>

                {/** Skills*/}
                <div className=" p-5 col-span-2 text-center">

                    <div className="bg-grained p-8">
                        <h1 className="text-3xl tracking-wider font-serif ">
                            What I can contribute.
                        </h1>
                        <p className="text-gray-400 tracking-wider">
                            Here are some of the technologies I use to develop websites.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-5 ">
                        {/** Front-End */}
                        <div className="bg-grained grid grid-cols-2 sm:col-span-2 lg:col-span-1 gap-5 text-start lg:p-10 items-center justify-center ">
                            <h1 className="col-span-3 text-secondary text-2xl tracking-wide w-full text-center">Front end</h1>
                            <div className="grid grid-cols-2 sm:col-span-3 min-w-max">
                                {frontEnd.map((skill, index) => (
                                    <AnimateUp key={index}>
                                        <div className='bg-grained p-2 flex justify-start items-center space-x-2 sm:text-xl lg:text-3xl ' key={index}>
                                            <p className={skill.color}> <skill.icon />  </p>
                                            <p className="text-base text-gray-500"> {skill.name} </p>
                                        </div>
                                    </AnimateUp>
                                ))}
                            </div>
                        </div>


                        {/** Back-End */}
                        <div className="bg-grained grid grid-cols-3 sm:col-span-2 lg:col-span-1 gap-5 text-start lg:p-10">
                            <h1 className="col-span-3 text-secondary text-2xl text-center tracking-wide ">Back end</h1>
                            <div className="grid grid-cols-2 sm:col-span-3 min-w-max">
                                {backEnd.map((skill, index) => (
                                    <AnimateUp key={index}>
                                        <div className='bg-grained p-2 flex justify-start items-center space-x-2 sm:text-xl lg:text-3xl ' key={index}>
                                            <p className={skill.color}> <skill.icon />  </p>
                                            <p className="text-base text-gray-500"> {skill.name} </p>
                                        </div>
                                    </AnimateUp>
                                ))}
                            </div>
                        </div>

                        {/** Others */}
                        <div className="bg-grained grid grid-cols-5 col-span-2 gap-6 text-start lg:p-10">
                            <h1 className="col-span-5 text-secondary text-2xl tracking-wide text-center ">Others</h1>
                            <div className="grid grid-cols-2 sm:col-span-5 min-w-max">
                                {others.map((skill, index) => (
                                    <AnimateUp key={index}>
                                        <div className='bg-grained p-2 flex justify-start items-center space-x-2 sm:text-xl lg:text-3xl ' key={index}>
                                            <p className={skill.color}> <skill.icon />  </p>
                                            <p className="text-base text-gray-500"> {skill.name} </p>
                                        </div>
                                    </AnimateUp>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/** achivements */}

                {/** Comments section about the portfolio  */}

            </div>
        </div>
    )
}

export default About
