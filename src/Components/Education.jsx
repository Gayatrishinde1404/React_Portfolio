import { motion } from "framer-motion";

const Education = () => {
    return (
      <section className="my-24">
        <motion.h2 
            whileInView={{opacity : 1, y : 0}}
            initial={{opacity : 0, y : -100}}
            transition={{duration : 0.5}}
           className="text-4xl text-center mb-12">Education</motion.h2>
  
        <div className="space-y-8 px-4">
          {/* Bachelor's Degree */}
          <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -50 }}
             transition={{ duration: 0.6, ease: "easeInOut" }}
             className="border p-6 rounded-lg shadow-lg hover:shadow-2xl">

            <h3 className="text-2xl font-semibold">Bachelor of Engineering in Electrical</h3>
            <p className="text-sm text-gray-500">Pune University | 2021 - 2024</p>
            <p className="mt-4 text-gray-700">Completed my Bachelor's degree with a solid foundation
               in problem-solving and analytical thinking, achieving an 8.5 CGPA.</p>
          </motion.div>
  
          {/* Training at Felix IT Systems */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            className="border p-6 rounded-lg shadow-lg hover:shadow-2xl">
              
            <h3 className="text-2xl font-semibold">Front-End Development Training</h3>
            <p className="text-sm text-gray-500">Felix IT Systems | June - November 2024</p>
            <p className="mt-4 text-gray-700">Six-month training focused on front-end and back-end
               technologies, enhancing skills in web development, React.js, and modern frameworks.</p>
          </motion.div>
        </div>
      </section>
    );
  };
  
  export default Education;
  