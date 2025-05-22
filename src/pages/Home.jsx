import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  {
    name: 'Desert',
    description: 'Hot, dry land with endless sand dunes',
imageUrl: 'https://images.pexels.com/photos/32109973/pexels-photo-32109973/free-photo-of-scenic-geothermal-landscape-in-iceland.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
  },
  {
    name: 'Forest',
    description: 'A red area full of trees and wildlife.',
 imageUrl: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'City',
    description: 'Night view of a busy city skyline.',
  imageUrl: 'https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Ocean',
    description: 'A vast body of salt water with waves and sea life',
imageUrl: 'https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white relative overflow-hidden p-4">
      
    
      <div className="w-full max-w-4xl mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentIndex].imageUrl}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={images[currentIndex].imageUrl}
              alt={images[currentIndex].name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold">{images[currentIndex].name}</h2>
          <p className="text-sm mt-1 max-w-xl mx-auto">{images[currentIndex].description}</p>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 cursor-pointer transition-transform ${
              index === currentIndex
                ? 'border-yellow-400 scale-110'
                : 'border-white hover:scale-105'
            }`}
          >
            <img src={img.imageUrl} alt={img.name} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

