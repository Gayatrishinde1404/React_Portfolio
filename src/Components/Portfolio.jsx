import React from 'react';
import mealProjectImage from '../assets/Recepi.png';
import userManagementImage from '../assets/UI_cards.png';
import covidTrackerImage from '../assets/Covid-19.png';
import googleKeepCloneImage from '../assets/Google_Keep_Clone.png';
import calculatorAppImage from '../assets/Calculator_app.png';
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <section className="my-24 text-white">
      {/* Animated Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-4xl text-center mb-12"
      >
        Projects
      </motion.h2>

      <div className="space-y-12">
        {/* Project 1: Find Meal for Your Ingredients */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={mealProjectImage}
            alt="Find Meal for Your Ingredients"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Find Meal for Your Ingredients</h3>
            <p className="mt-2 text-gray-300">
              A website to search for meals based on input ingredients, using an external meal API.
            </p>
            <p className="mt-2 text-blue-800">Technologies: HTML, CSS, JavaScript, API</p>
          </motion.div>
        </motion.div>

        {/* Project 2: User Management CRUD Web Page */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={userManagementImage}
            alt="User Management CRUD Web Page"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">User Management CRUD</h3>
            <p className="mt-2 text-gray-300">
              A CRUD web page for managing user data with interactive features.
            </p>
            <p className="mt-2 text-blue-800">Technologies: HTML, TailwindCss, JavaScript, React.js</p>
          </motion.div>
        </motion.div>

        {/* Project 3: Covid-19 Tracker */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={covidTrackerImage}
            alt="Covid-19 Tracker"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Covid-19 Tracker</h3>
            <p className="mt-2 text-gray-300">
              A real-time tracker fetching Covid-19 statistics using RapidAPI.
            </p>
            <p className="mt-2 text-blue-800">Technologies: HTML, CSS, JavaScript, API</p>
          </motion.div>
        </motion.div>

        {/* Project 4: Google Keep Clone */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={googleKeepCloneImage}
            alt="Google Keep Clone"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Google Keep Clone</h3>
            <p className="mt-2 text-gray-300">
              A clone of Google Keep for note-taking, implementing state management.
            </p>
            <p className="mt-2 text-blue-800">Technologies: React.js, ReactHooks, TailwindCss</p>
          </motion.div>
        </motion.div>

        {/* Project 5: Calculator App */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center md:space-x-8"
        >
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={calculatorAppImage}
            alt="Calculator App"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0 md:w-1/2"
          >
            <h3 className="text-2xl font-bold">Calculator App</h3>
            <p className="mt-2 text-gray-300">
              A simple calculator app for basic arithmetic operations with a clean UI.
            </p>
            <p className="mt-2 text-blue-800">Technologies: React.js, HTML, CSS</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
