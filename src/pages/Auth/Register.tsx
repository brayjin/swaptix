// src/pages/Auth/Register.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation would normally go here
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Here you would normally integrate with your authentication backend
    console.log('Registration form submitted:', formData);
    // For now, we'll just log the form data
    alert('Registration functionality will be integrated with backend in future development.');
  };

  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-background-dark">
      <div className="container-app py-10">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="card border border-accent-turquoise border-opacity-30 backdrop-blur-sm"
          >
            <div className="mb-6 text-center">
              <h1 className="text-3xl font-bold font-heading mb-2">Create an Account</h1>
              <p className="text-gray-400">Join Swaptix and start trading tickets</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-accent-turquoise"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-accent-turquoise"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-accent-turquoise"
                  placeholder="Create a password"
                />
              </div>
              
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-dark border border-gray-700 text-white focus:outline-none focus:border-accent-turquoise"
                  placeholder="Confirm your password"
                />
              </div>
              
              <div className="flex items-center">
                <input
                  id="acceptTerms"
                  name="acceptTerms"
                  type="checkbox"
                  required
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="h-4 w-4 text-accent-turquoise bg-background-dark border-gray-700 rounded focus:ring-accent-turquoise"
                />
                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-accent-turquoise hover:text-accent-turquoise/80">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-accent-turquoise hover:text-accent-turquoise/80">
                    Privacy Policy
                  </a>
                </label>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full btn-accent"
                >
                  Create Account
                </button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  Already have an account?{' '}
                  <Link to="/login" className="text-accent-turquoise hover:text-accent-turquoise/80">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;