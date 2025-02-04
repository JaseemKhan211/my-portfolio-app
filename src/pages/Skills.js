import React from "react";

function Skills() {
  return (
    <div className="h-screen p-6 bg-[#913e37] text-white">
      <div className="max-w-5xl mx-auto">

        {/* Front End Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400">Front End</h2>
          <ul className="list-disc list-inside space-y-2">
            <li> React JS | Next JS </li>
            <li> JavaScript ES6 </li>
            <li> Ajax | jQuery (Initial Level) </li>
            <li> HTML5, Pug, CSS3, Tailwind CSS, MaterialUI, Bootstrap </li>
          </ul>
        </section>

        {/* Back End Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-green-400">Back End</h2>
          <ul className="list-disc list-inside space-y-2">
            <li> SQL | PLSQL </li>
            <li> Oracle APEX | Oracle Database </li>
            <li> Node JS | Express JS </li>
            <li> REST Api architecture </li>
            <li> MongoDB </li>
          </ul>
        </section>

        {/* Mobile Development Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">Mobile Development</h2>
          <ul className="list-disc list-inside space-y-2">
            <li> React Native | Flutter (Initial Level) </li>
          </ul>
        </section>

        {/* Tools & Services Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-red-400">Tools & Services</h2>
          <ul className="list-disc list-inside space-y-2">
            <li> Google Maps, Places & Geolocation </li>
            <li> Firebase - Authentication, Realtime, Firestore & Storage </li>
            <li> Heroku, Firebase, Vercel - Hosting </li>
            <li> GitHub </li>
            <li> Figma for UI/UX design and prototyping </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Skills;
