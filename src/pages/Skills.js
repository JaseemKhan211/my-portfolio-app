import React, { useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("front-end");

  const skillsContent = {
    "front-end": [
      "JavaScript ES6",
      "Ajax | jQuery (Initial Level)",
      "React JS (Mid Level)",
      "HTML5, CSS3, Pug, MaterialUI, Bootstrap & Sweet Alert"
    ],
    "back-end": [
      "SQL | PLSQL",
      "Oracle APEX",
      "Oracle Database",
      "Firebase (Mid Level)",
      "Node JS | Express JS (Mid Level)",
      "REST API",
      "Oracle APEX RESTful API Services",
      "MongoDB | Mongoose (Mid Level)",
      "Strong understanding of SQL relational database design",
      "Strong understanding of PLSQL tables and relationship hierarchy",
      "Strong understanding of RDBMS, DBMS, and database commands DDL | DML | DCL | TCL | DQL"
    ],
    "mobile-dev": [
      "React Native (Beginner Level)",
      "Flutter (Beginner Level)"
    ],
    "software-arch": [
      "MVC - Model View Controller",
      "MVP - Model View Presenter",
      "MVVM - Model View View Model"
    ],
    "tools-services": [
      "Google Maps, Facebook Authentication",
      "Firebase - Authentication, Realtime, Firestore & Storage",
      "Heroku, Now & Firebase Hosting",
      "Git | GitHub for version control",
      "Proficient in Figma for UI/UX design and prototyping"
    ]
  };

  return (
    <div className="flex space-x-8 mt-8">
      {/* Navigation */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg">
        <ul className="space-y-4">
          {Object.keys(skillsContent).map((category) => (
            <li
              key={category}
              className={`cursor-pointer text-xl font-medium py-2 px-4 rounded-lg transition-all ${
                activeCategory === category
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-300"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.replace("-", " ").toUpperCase()}
            </li>
          ))}
        </ul>
      </div>

      {/* Skills Content */}
      <div className="w-3/4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          {activeCategory.replace("-", " ").toUpperCase()}
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          {skillsContent[activeCategory].map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;