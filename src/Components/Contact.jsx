import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      {/* Animated Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="text-center tracking-tighter">
        {/* Animated Address */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="my-4"
        >
          Address : Chintamani Park, Theur, Pune 412110
        </motion.p>

        {/* Animated Phone */}
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
          className="my-4"
        >
          Phone : 91 9307378250
        </motion.p>

        {/* Animated Email */}
        <motion.a
          href="#"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="my-4 border-b"
        >
          Email : <span className="text-blue-500">gayatrishinde1404@gmail.com</span>
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
