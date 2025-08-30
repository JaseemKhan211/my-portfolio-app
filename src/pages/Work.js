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
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-1/2 pr-4 relative">
            <div className="w-6 h-6 bg-[#333333] rounded-full absolute right-0 transform translate-x-1/2"></div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl text-black font-semibold">Private Client</h2>
              <p className="text-sm text-gray-500 mb-2">Dubai, United Arab Emirates – Remote</p>
              <p className="text-sm text-gray-500 mb-2">Contract | March 2025 – August 2025</p>
              <h3 className="font-medium text-black text-lg">Software Engineer</h3>
              <p className="mt-2 text-black">
                Collaborated remotely with a Dubai-based client to design and develop a secure Privileged Access Management (PAM) system using a monorepo architecture. 
                The project was structured into a backend built on the MVC architecture and a frontend built using a component-based architecture with Next.js. 
                I was responsible for system design, backend development using Node.js and Express, frontend implementation with Next.js, and database operations using Oracle, SQL, and PL/SQL. 
                Delivered critical features including secure authentication, session control, and audit logging, while ensuring code scalability, maintainability, and performance. 
                Actively contributed to system-level decisions and collaborated closely across modules to ensure seamless integration and delivery.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience 2 */}
        <motion.div
          className="mb-12 flex items-center w-full"
          initial={{ opacity: 0, x: '-100%' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-1/2 pr-4 text-left">
            <div className="bg-white shadow-lg p-6 rounded-lg">
              <h2 className="text-xl text-black font-semibold">Software Channel</h2>
              <p className="text-sm text-gray-500 mb-2">Karachi, Pakistan - On-site</p>
              <p className="text-sm text-gray-500 mb-2">Jun 2024 - Present</p>
              <h3 className="font-medium text-black text-lg">Software Developer</h3>
              <p className="mt-2 text-black">
                In my role, I develop ERP systems using Oracle APEX and Oracle Database. I work with SQL, PL/SQL (procedures, functions, triggers) to automate tasks and improve efficiency. 
                I also use JavaScript frameworks to enhance client-side features and integrate RESTful APIs for secure and scalable data exchange, delivering systems that meet diverse business needs.
              </p>
            </div>
          </div>
          <div className="w-1/2 pl-4 relative">
            <div className="w-6 h-6 bg-[#333333] rounded-full absolute left-0 transform -translate-x-1/2"></div>
          </div>
        </motion.div>

        {/* Experience 3 */}
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
              <p className="text-sm text-gray-500 mb-2">Pakistan - Remote</p>
              <p className="text-sm text-gray-500 mb-2">Contract | December 2023 - February 2024</p>
              <h3 className="font-medium text-black text-lg">React Web & Mobile Dev Internee</h3>
              <p className="mt-2 text-black">
                During my internship, I worked on developing web and mobile applications using React.js, React Native, JavaScript, and Firebase. 
                My responsibilities included building and deploying full-stack applications for both web and mobile platforms, developing hybrid mobile apps with React Native, and creating responsive, user-friendly designs.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Work;