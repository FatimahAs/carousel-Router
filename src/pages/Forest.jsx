import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';


export default function Forest() {

  

  return (
  <div className="flex flex-col items-center justify-center bg-gray-900 text-white relative overflow-hidden p-4">
      
    
      <div className="w-full max-w-4xl mb-8">
        <AnimatePresence mode="wait">
          <motion.div
            key='1'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full h-64 md:h-96 overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800"
              alt='forest'
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold">Forest</h2>
          <p className="text-sm mt-1 max-w-xl mx-auto">A red area full of trees and wildlife</p>
        </div>
      </div>
    </div>
  );
}

