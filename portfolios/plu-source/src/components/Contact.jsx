import { CONTACT } from "../constants"
import { motion } from "framer-motion";
import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="scroll-mt-24 pb-20">
        <motion.h2
            whileInView={{opacity: 1, y:0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 0.5}}
            className="my-10 text-center text-4xl text-[#2D4473]">Get in Touch</motion.h2>
        <motion.div
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 0.5}}
            className="text-center tracking-tighter text-[#7A98BF]">
            <p className="my-4">{CONTACT.address}</p>
            <p className="my-4">{CONTACT.phoneNo}</p>
            <a href="#" className="border-b">{CONTACT.email}</a>
            <div className="mt-8 flex items-center justify-center gap-6 text-2xl">
                <a
                    href="https://github.com/PhluCode"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-[#7A98BF] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#2D4473]">
                    <FaGithub/>
                </a>
                <a
                    href="https://facebook.com/phlu.suwanchaicss/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-[#7A98BF] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#2D4473]">
                    <FaFacebook/>
                </a>
                <a
                    href="https://instagram.com/phlu_gz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-[#7A98BF] transition-all duration-200 hover:-translate-y-0.5 hover:text-[#2D4473]">
                    <FaInstagram/>
                </a>
            </div>
        </motion.div>
    </div>
  )
}

export default Contact
