import ProfilePic from '../assets/MyImg.jpg';
import { motion } from "framer-motion";

const Container = (delay) =>({
   hidden: {x: -100, opacity: 0},
   visible: {
     x: 0,
     opacity: 1,
     transition: {duration: 0.5, delay: delay},
   },
})

function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start ">
            <motion.h1 
             variants={Container(0)}
             initial="hidden"
             animate="visible"
             className=" ml-5 pb-16 text-6xl font-thin tracking-tight lg:mt-13 lg:text-7xl">Gayatri Shinde</motion.h1>
            <motion.span 
             variants={Container(0.5)}
             initial="hidden"
             animate="visible"
            className="ml-5 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text
                          text-4xl tracking-tight text-transparent">Front End Developer</motion.span>

            <motion.p
             variants={Container(1)}
             initial="hidden"
             animate="visible" 
             className=" ml-5 my-2 max-w-xl py-6 font-extralight tracking-tighter text-sm">
              I'm Gayatri Shinde, a front-end developer with a knack for building seamless and engaging web
              experiences. I specialize in HTML, CSS, JavaScript, and modern libraries and frameworks like
              React.js, Redux, Bootstrap, and Tailwind. With a focus on responsive design, performance
              optimization, and clean code, I leverage the latest technologies to bring innovative ideas to life.
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex justify-center'>
            <motion.img
              initial={{x:100, opacity:0 }}
              animate={{x:0, opacity:1 }}
              transition={{duration: 1, delay: 1.2 }}
              src={ProfilePic}
              alt="ProfilePic"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-md object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero;