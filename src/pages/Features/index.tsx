// src/pages/Features/index.tsx
import { motion } from 'framer-motion';

const Features = () => {
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
            Swaptix Features
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-10 text-center max-w-3xl mx-auto"
          >
            Discover what makes our ticket resale platform unique.
          </motion.p>
          <div className="bg-background-light rounded-xl p-8 text-center">
            <p className="text-lg text-accent-turquoise">
              This page will showcase key features with interactive 3D elements and animations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;