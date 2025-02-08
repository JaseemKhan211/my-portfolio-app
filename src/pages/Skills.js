import React from "react";

function Skills() {
  return (
    <div className="min-h-screen p-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Front End Section */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-[#333333] rounded mr-4"></div>
            <h2 className="text-2xl font-semibold">Front End</h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li> JavaScript ES6 | React JS | Next JS </li>
            <li> Latest ES Features </li>
            <li> Libraries widely used Redux | Socket.io </li>
            <li> Ajax | jQuery (Initial Level) </li>
            <li> Python (Mid Level) </li>
            <li> HTML5, Pug, CSS3, Tailwind CSS, MaterialUI, Bootstrap </li>
          </ul>
          <hr className="border-t-2 border-[#333333] mt-6" />
        </section>

        {/* Back End Section */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-[#333333] rounded mr-4"></div>
            <h2 className="text-2xl font-semibold">Back End</h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li> SQL | PLSQL </li>
            <li> Oracle APEX | Oracle Database </li>
            <li> Node JS | Express JS </li>
            <li> REST Api architecture </li>
            <li> MongoDB | Mongoose </li>
          </ul>
          <hr className="border-t-2 border-[#333333] mt-6" />
        </section>

        {/* Mobile Development Section */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-[#333333] rounded mr-4"></div>
            <h2 className="text-2xl font-semibold">Mobile Development</h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li> React Native | Flutter (Mid Level) </li>
          </ul>
          <hr className="border-t-2 border-[#333333] mt-6" />
        </section>

        {/* Tools & Services Section */}
        <section>
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-[#333333] rounded mr-4"></div>
            <h2 className="text-2xl font-semibold">Tools & Services</h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li> Google Maps, Places & Geolocation </li>
            <li> Firebase - Authentication, Realtime, Firestore & Storage </li>
            <li> Heroku, Firebase, Vercel - Hosting </li>
            <li> GitHub </li>
            <li> Figma for UI/UX design and prototyping </li>
          </ul>
          {/* <hr className="border-t-2 border-white mt-6" /> */}
        </section>
      </div>
    </div>
  );
}

export default Skills;