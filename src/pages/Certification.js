// import React from "react";
import { motion } from "framer-motion";

function Certification() {
  const certifications = [
    {
      title: "Software Engineering 101: Plan and Execute Better Software",
      issuer: "Udemy",
      issued: "July 2025",
      url: "https://www.udemy.com/certificate/UC-8f2ce291-e416-41a1-beaa-a938be7bc47b/",
    },
    {
      title: "Node.js, Express, MongoDB & More: The Complete Bootcamp 2024",
      issuer: "Udemy",
      issued: "Feb 2024",
      url: "https://www.udemy.com/certificate/UC-8ebf6e08-d83d-4d3f-befa-3a3446eb5534/",
    },
    {
      title: "Introduction to SOLID Principles",
      issuer: "10Pearls University",
      issued: "Oct 2024",
      url: "https://10pearlsuniversity.org/view-certificate/?cid=10PUC-77da4a8e0644dbe7e0f5a2ee16357dc00176d2691c6c515e114776682",
    },
    {
      title: "Object Oriented Programming Foundations",
      issuer: "10Pearls University",
      issued: "Oct 2024",
      url: "https://10pearlsuniversity.org/view-certificate/?cid=10PUC-320e0a1260e679ab0bf933ef74e2048c111b4070fd93132b114774259",
    },
    {
      title: "Programming Fundamentals",
      issuer: "10Pearls University",
      issued: "Oct 2024",
      url: "https://10pearlsuniversity.org/view-certificate/?cid=10PUC-1d82b7bd7230aa58c831a4ff28d072b1205569f34dff5b9d114778040",
    },
    {
      title: "Introduction to RDBMS in SQL",
      issuer: "DataCamp",
      issued: "Jan 2024",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/5aa1d1752f0928df3670b34525aa7517fa4f6e37?raw=1",
    },
    {
      title: "SQL for Joining Data",
      issuer: "DataCamp",
      issued: "Nov 2023",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/1a0dc744823fda461bf89f2131839f2e1fcb12ec?raw=1",
    },
    {
      title: "Intermediate SQL",
      issuer: "DataCamp",
      issued: "Oct 2023",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/5041cf046b234160a8e8c38e86c3e2743d901293?raw=1",
    },
    {
      title: "Intermediate SQL Queries",
      issuer: "DataCamp",
      issued: "Oct 2023",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/33aa91866232209877e14f741c4f9e3942b679e0",
    },
    {
      title: "Introduction to SQL",
      issuer: "DataCamp",
      issued: "Aug 2023",
      url: "https://www.datacamp.com/statement-of-accomplishment/course/a0ada99f67f37e3568c7d8a8e3fa8040d0ac0965?raw=1",
    },
    {
      title: "Oracle APEX Cloud Developer Certified Professional",
      issuer: "Oracle",
      issued: "Sep 2023",
      url: "https://signon.oracle.com/signin",
    },
    {
      title: "Participate GitHub",
      issuer: "Microsoft Learn Student Ambassadors - University of Karachi",
      issued: "Apr 2023",
    },
    {
      title: "Participate Database Design",
      issuer: "PROCOM 23 - FAST National University",
      issued: "Mar 2023",
    },
    {
      title: "Mobile & Web App Development",
      issuer: "Expertizo",
    },
    {
      title: "Freelancing",
      issuer: "DigiSkills.pk",
      issued: "Apr 2019",
    },
    {
      title: "Graphic Design",
      issuer: "DigiSkills.pk",
      issued: "Apr 2019",
    },
    {
      title: "Certified Computer Operator (CCO)",
      issuer: "Saylani Welfare International Trust",
      issued: "Oct 2017",
    },
  ];

  return (
    <div className="min-h-screen p-6 from-[#6e4c4c] to-[#912323] text-white">
      <div className="max-w-4xl mx-auto">
        {/* <h1 className="text-3xl font-bold text-center mb-8">Certifications</h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-4 bg-[#333333] rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h2 className="text-xl font-semibold">{cert.title}</h2>
              <p className="text-sm text-gray-300">{cert.issuer}</p>
              {cert.issued && <p className="text-sm text-gray-400">Issued: {cert.issued}</p>}
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 underline mt-2 block"
                >
                  Valid Certificate URL here
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certification;