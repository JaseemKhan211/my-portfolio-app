import React from 'react';
import { motion } from 'framer-motion';

const Work = () => {
  return (
    <div className="min-h-screen py-9">
      <div className="relative container mx-auto px-4">

        {/* Timeline Line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#333333]"></div>

        {/* Experience 1 */}
        <motion.div
          className="mb-12 flex items-center w-full"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-1/2 pr-4 text-left">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl text-black font-semibold">Software Channel</h2>
              <p className="text-sm text-gray-500 mb-2">May 2022 - Present</p>
              <h3 className="font-medium text-black text-lg">Software Developer</h3>
              <p className="mt-2 text-black">
                In my role, I develop ERP systems using Oracle APEX and Oracle Database, 
                with expertise in SQL queries, PL/SQL procedures, functions, and triggers 
                to automate tasks, enhance efficiency, and support decision-making through robust RDBMS capabilities. 
                I integrate modern JavaScript libraries and frameworks to improve client-side functionality, 
                complementing the power of Oracle APEX. My approach includes implementing secure and dynamic 
                data exchanges through RESTful APIs, ensuring scalable and innovative system designs tailored to 
                meet diverse business requirements.
              </p>
            </div>
          </div>
          <div className="w-1/2 pl-4 relative">
            <div className="w-6 h-6 bg-[#333333] rounded-full absolute left-0 transform -translate-x-1/2"></div>
          </div>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          className="mb-12 flex items-center w-full"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-1/2 pr-4 relative">
            <div className="w-6 h-6 bg-[#333333] rounded-full absolute right-0 transform translate-x-1/2"></div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl text-black font-semibold">Stech Solution</h2>
              <p className="text-sm text-gray-500 mb-2">October 2021 - January 2022</p>
              <h3 className="font-medium text-black text-lg">React Web & Mobile Dev Internee</h3>
              <p className="mt-2 text-black">
                In my role, I created web and mobile applications using React.js and React Native. 
                I focused on creating engaging and user-friendly designs supported by Firebase integration.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;