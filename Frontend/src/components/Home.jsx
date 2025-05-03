import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bed, Bath, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/owner');
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex justify-center items-center h-[70vh] bg-gray-100">
        <div className="relative w-10/12 h-full rounded-lg overflow-hidden shadow-lg border-4 border-gray-300 bg-white transform hover:scale-105 transition-transform duration-300">
          <img
            src="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Luxury House"
            className="w-full h-full object-cover rounded-lg"
          />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-3xl font-bold text-white">Beautiful Modern House</h3>
            <p className="text-white text-opacity-80 text-lg">A stunning house in the heart of the city</p>
          </div>
        </div>
      </div>

      {/* Listings Section */}
      <div className="flex flex-wrap items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 p-8 gap-8">
        {[...Array(3)].map((_, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-2xl overflow-hidden max-w-md w-full sm:w-1/2 lg:w-1/3 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.div
              className="relative h-64 overflow-hidden"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="https://images.pexels.com/photos/259597/pexels-photo-259597.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Rented House"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  className="bg-white text-black px-4 py-2 rounded-full font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </motion.div>
            </motion.div>

            {/* House details */}
            <div className="p-6">
              <motion.h2
                className="text-2xl font-bold mb-2 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Happy clean Home
              </motion.h2>
              <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Perfect for families or young professionals
              </motion.p>

              {/* Icons and features */}
              <motion.div
                className="flex justify-between items-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center">
                  <Bed className="w-5 h-5 text-blue-500 mr-2" />
                  <span>3 Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 text-blue-500 mr-2" />
                  <span>2 Bathrooms</span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <MapPin className="w-5 h-5 text-blue-500 mr-2" />
                <span>Ram Nager colony rudauli Ayodhya Uttar Pradesh</span>
              </motion.div>

              {/* Price and contact */}
              <motion.div
                className="flex justify-between items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-gray-800">6000 Rupees</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
                <motion.button
                  className="bg-blue-500 text-white px-4 py-2 rounded-full font-semibold"
                  whileHover={{ scale: 1.05, backgroundColor: '#3b82f6' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNavigate}
                >
                  Contact Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}
