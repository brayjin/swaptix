// src/pages/Home/index.tsx
import { useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera, Float } from '@react-three/drei';

// 3D Ticket Component
const Ticket = () => {
  const ticketRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!ticketRef.current) return;
    
    // Gentle rotation
    ticketRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    ticketRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={ticketRef}>
        <boxGeometry args={[4, 2, 0.05]} />
        <meshStandardMaterial color="#40E0D0" emissive="#40E0D0" emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-primary-dark to-secondary-dark"></div>
        
        {/* 3D Canvas */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <Ticket />
          </Canvas>
        </div>
        
        {/* Content */}
        <div className="container-app relative z-10 text-center py-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold font-heading mb-6 "
          >
            <span className="block">Unlock value and opportunities</span>
            <span className="block text-accent-turquoise">with our ticket resale app.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Buy, sell and trade tickets for events with confidence. No more wasted tickets or missed opportunities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/events" className="btn-primary">
              Browse Events
            </Link>
            <a href="#" className="btn-accent">
              Download App
            </a>
            <Link to="/how-it-works" className="btn-secondary">
              Watch Demo
            </Link>
            <Link to="/login" className="btn bg-background-light text-white hover:bg-opacity-80 hover:shadow-lg">
              Login
            </Link>
          </motion.div>
          
          {/* Scroll down indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <p className="text-gray-400 mb-2">Scroll to explore</p>
            <svg 
              className="w-6 h-6 text-accent-turquoise animate-bounce" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Featured Events Section (Example) */}
      <section className="section bg-background-dark">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Events</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Discover the hottest events available on our platform right now.
            </p>
          </motion.div>

          {/* Event cards placeholder - will be developed further */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="card overflow-hidden group"
              >
                <div className="h-48 bg-primary-light mb-4 rounded-lg flex items-center justify-center">
                  <span className="text-accent-turquoise text-xl">Event Image {item}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent-turquoise transition-colors">
                  Event Title {item}
                </h3>
                <p className="text-gray-400 mb-4">Brief description of the event goes here.</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-accent-pink">$99.99</span>
                  <Link to="/events" className="btn-accent text-sm py-2">
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/events" className="btn-primary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview Section */}
      <section className="section bg-gradient-to-b from-background-dark to-primary-dark">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How It Works</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Swaptix makes buying and reselling tickets simple, secure, and profitable.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Buy", icon: "💸", description: "Purchase tickets from our verified sellers." },
              { title: "Resell", icon: "🔄", description: "List your unused tickets on our marketplace." },
              { title: "Wallet", icon: "💰", description: "Receive and sent payment quickly and securely." }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="card text-center"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-accent-turquoise">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/how-it-works" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary-light relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-accent-pink"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-accent-turquoise"></div>
        </div>
        
        <div className="container-app relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Join the Ticket Resale Revolution!
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Don't miss out on events or revenue opportunities. Start buying and selling tickets today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register" className="btn-accent">
                Get Started Now
              </Link>
              <Link to="/contact" className="btn bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;