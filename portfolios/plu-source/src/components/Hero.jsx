import { ABOUT_TEXT, EDUCATION } from "../constants";
import profile from '../assets/myProfile.png';
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const container = (delay) => ({
    hidden: {x: -100, opacity: 0},
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
  return (
    <div id='about' className='w-full scroll-mt-24 pb-4 lg:mb-20'>
        <div className='flex flex-wrap items-center'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1
                        variants={container(0)}
                        initial='hidden'
                        animate='visible'
                        className="pb-8 text-5xl font-thin tracking-tight lg:text-7xl text-[#2D4473]">
                        Suwanchai Chaisuwansri
                    </motion.h1>
                    <motion.p
                        variants={container(0.5)}
                        initial='hidden'
                        animate='visible'
                        className="bg-gradient-to-r from-sky-300 via-slate-500 to-green-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        I'm a Backend Developer
                    </motion.p>
                    <motion.p
                        variants={container(1)}
                        initial='hidden'
                        animate='visible'
                        className="my-2 max-w-xl py-6 font-light text-[#7A98BF]">
                        {ABOUT_TEXT}
                    </motion.p>
                    <motion.div
                        variants={container(1.3)}
                        initial='hidden'
                        animate='visible'
                        className="w-full max-w-xl">
                        <div className="mb-4 inline-flex items-center gap-2 border-b border-[#7A98BF]/30 py-2 text-[#2D4473]">
                            <FaGraduationCap className="text-2xl" />
                            <span className="text-lg font-bold uppercase tracking-wide">Education</span>
                        </div>
                        <div className="flex flex-col gap-4 text-left">
                            {EDUCATION.map((edu) => (
                                <div key={edu.school}>
                                    <h3 className="font-semibold text-[#2D4473]">{edu.school}</h3>
                                    <p className="text-[#7A98BF]">{edu.program}</p>
                                    <p className="text-sm text-[#7A98BF]">{edu.detail}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        initial={{x:100, opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{duration: 1, delay: 1.3}}
                        className="rounded-3xl w-96"
                        src={profile}
                        alt="Suwanchai Chaisuwansri"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
