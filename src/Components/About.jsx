import AboutImg from '../assets/AboutImg.png';
import { motion } from "framer-motion";
const About =() => {
  return (
    <div className="border-b border-neutral-900 pb-4 ">
        <h2 className="my-20 text-center text-4xl">About 
         <span className="text-neutral-500"> Me</span>
         </h2>
         <div className="flex flex-wrap">
            <motion.div
            whileInView={{opacity: 1, x: 0 }}
            initial={{opacity: 0, x: -100 }} 
            transition={{duration: 0.5 }}
            className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img src={AboutImg}
                 className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-md object-cover"
                  alt="About"/>
            </div>
            </motion.div>
            <motion.div
                whileInView={{opacity: 1, x: 0 }}
                initial={{opacity: 0, x: 100 }} 
                transition={{duration: 0.5 }}
                className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                     <p className="my-2 max-w-xl py-6 font-extralight tracking-tighter text-sm">
                     I’m Gayatri Shinde, a dedicated front-end developer focused on building responsive,
                    interactive, and user-friendly websites. With expertise in HTML, CSS, JavaScript, and modern frameworks
                    like React.js, Redux, Bootstrap, and Tailwind, I aim to create seamless digital experiences that work 
                    across all devices.I prioritize clean, efficient code, and strive to ensure that every website 
                    I build is not only functional but also visually appealing and easy to navigate.
                     I’m passionate about staying current with the latest web technologies, continuously enhancing my 
                     skills, and applying best practices to deliver optimized, high-performance web applications.
                    I enjoy working on projects that challenge my creativity and problem-solving skills,
                     and I’m always excited to collaborate with others to create innovative and impactful solutions.
                     </p>
                </div>
            </motion.div>
         </div>
    </div>
  )
}

export default About