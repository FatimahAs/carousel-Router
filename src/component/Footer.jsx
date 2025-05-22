import React from 'react';
import { Link } from 'react-router';


export default function Footer() {


  return (
    <div className=" flex flex-col items-center justify-center bg-gray-900 text-white relative overflow-hidden p-4">
      
    
      <div className="w-full max-w-4xl mb-8">
       
    

      <div className="flex gap-4 flex-wrap justify-center">
     <Link to="./"><img src="https://images.pexels.com/photos/32109973/pexels-photo-32109973/free-photo-of-scenic-geothermal-landscape-in-iceland.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='desert' className="w-full h-full object-cover w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 cursor-pointer transition-transform" /></Link>
     <Link to='./forest'><img src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800" alt='Forest' className="w-full h-full object-cover w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 cursor-pointer transition-transform" /></Link>
     <Link to='./city'><img src='https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=800' alt='City' className="w-full h-full object-cover w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 cursor-pointer transition-transform" /></Link>
     <Link to='./ocean'><img src='https://images.pexels.com/photos/847393/pexels-photo-847393.jpeg?auto=compress&cs=tinysrgb&w=800' alt='Ocean' className="w-full h-full object-cover w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 cursor-pointer transition-transform" /></Link>
          </div>
       
      </div>
    </div>
  );
}

