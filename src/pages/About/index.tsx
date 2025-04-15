// src/pages/About/index.tsx
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20 min-h-screen">
      <section className="section bg-background-dark">
        <div className="container-app">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold font-heading mb-6 text-center"
          >
            About Swaptix
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 text-center max-w-3xl mx-auto"
          >
            Learn about our vision, mission, and business model.
          </motion.p>
          <div className="bg-background-light rounded-xl p-8 text-center">
            <p className="text-lg text-accent-turquoise">
              This page will contain information about our company, team, and 10% commission business model.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;