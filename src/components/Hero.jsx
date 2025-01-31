import Coffee from '../assets/coffee5.png';
import Bean1 from '../assets/bean1.png';
import Bean2 from '../assets/bean2.png';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="from-slate-100 to-amber-950 bg-gradient-to-r mt-14">
        <div className="max-w-screen-lg md:max-w-screen-xl lg:max-w-screen-2xl mx-auto grid md:grid-cols-2 place-items-center h-[900px] md:h-[900px]">
            {/* text section */}
            <div className="space-y-5 px-4 py-10 ">
                <motion.h3
                    initial={{ opacity: 0, x: -50}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.2}} 
                    className="text-amber-900 text-lg font-semibold font-cursive">Welcome to Brew Haven___</motion.h3>
                <motion.h1
                    initial={{ opacity: 0, x: -60}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1, delay: 0.4}}                 
                    className="text-4xl md:text-6xl font-bold font-cursive2">Experience Artisanal <span className="text-amber-900">Coffee</span>  at Brew Haven</motion.h1>
                <motion.p
                    initial={{ opacity: 0, x: -60}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.2, delay: 0.6}} 
                >Indulge in our carefully crafted brews, made from ethically sourced beans and brewed to perfection.</motion.p>
                <motion.div
                    initial={{ opacity: 0, x: -70}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.4, delay: 0.8}}  
                    className="flex gap-2">
                    <button className="bg-amber-900 py-2 px-3 text-white rounded-md"><a href="#menu">View Menu</a></button>
                    <button className="bg-transparent border-amber-900 border py-2 px-3 text-amber-900 rounded-md"><a href="#menu">Our Story</a></button>
                </motion.div>
            </div>
            {/* imga section */}
            <div className=''>
                <motion.img
                    initial={{ opacity: 0, scale:0.5 }}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 1.5, delay: 0.5}} 
                    src={Coffee} alt="" className='w-[500px]' />
            </div>
            <div className=''>
                <motion.img
                    initial={{ opacity: 0, x: 400, scale:0.7 }}
                    whileInView={{opacity: 1, x: 0, scale: 1, rotate: 45}}
                    transition={{duration: 1.8, delay: 0.8}} 
                    src={Bean2} alt="" className='absolute hidden md:block lg:-bottom-40 xl:bottom-48 xl:left-72 lg:left-52 w-20 rotate-45' />
                <motion.img
                    initial={{ opacity: 0, x: 600, y: 200, scale:0.7 }}
                    whileInView={{opacity: 1, x: 0, y: 0, scale: 1}}
                    transition={{duration: 1.8, delay: 0.8}}
                    src={Bean1} alt="" className='absolute hidden md:block md:top-24 lg:top-32 md:left-0 2xl:left-48 w-20' />
                <motion.img
                    initial={{ opacity: 0, x: -100, y: 100, scale:0.7 }}
                    whileInView={{opacity: 1, x: 0, y: 0, scale: 1, rotate: 45}}
                    transition={{duration: 1.8, delay: 0.8}}
                    src={Bean2} alt="" className='absolute hidden md:block w-20 top-20 md:right-0 2xl:right-48 -rotate-45' />
            </div>
        </div>

    </div>
  )
}

export default Hero