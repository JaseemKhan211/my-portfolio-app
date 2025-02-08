import React from "react";

function Projects() {
  const projects = [
    {
      title: "Portfolio App - Personal Showcase Platform 💻",
      description: "A sleek and modern portfolio application designed to showcase projects and skills effectively. Built with React.js and styled using Tailwind CSS, this app delivers a responsive and visually appealing user interface, ensuring an engaging experience across all devices.",
      link: "https://github.com/JaseemKhan211/my-portfolio-app",
    },
    {
      title: "🎯 MindMingle - Interactive Quiz App",
      description:
        "MindMingle Quiz is an engaging web application designed for real-time quiz creation, management, and participation. Built with Node.js, MongoDB, and Express.js on the backend, and a responsive frontend powered by Pug and CSS, it offers a seamless experience for both administrators and students. The app follows the MVC architecture for scalability, with real-time updates facilitated by Socket.io. Key features include a timer for each question, secure user authentication, dynamic question management, and interactive notifications with SweetAlert. It also integrates Multer for file uploads, making it perfect for educational purposes.",
      link: "https://github.com/JaseemKhan211/MindMingle-Quiz",
    },
    {
      title: "🍔 DineNear - Restaurant Finder App",
      description:
        "Effortlessly discover nearby restaurants with your ultimate dining companion. This app is crafted with Flutter, Node.js, and MongoDB to deliver a seamless experience through real-time search, user reviews, and an intuitive interface, making dining decisions a breeze. The frontend follows the MVVM architecture, while the backend is structured with the MVC architecture for optimal performance and scalability. Designed with precision using Figma Prototyping, ensuring a user-centric and visually appealing experience.",
      prototypeLink:
        "https://www.figma.com/proto/JnaodGW2jx1MECgrDD4lVk/Untitled?page-id=0%3A1&node-id=11-5&p=f&viewport=2417%2C1878%2C0.54&t=DkkAAPJu7wADhkn0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A5",
      links: [
        "https://github.com/JaseemKhan211/DineNear-Frontend",
        "https://github.com/JaseemKhan211/DineNear-Backend",
      ],
    },
    {
      title: "Student Information Portal 🎓",
      description:
        "Streamline student management with seamless registration, profile uploads, and instant report generation in a user-friendly interface. Built with Pug, Node.js, Express.js, and MongoDB, the portal leverages the MVC architecture for scalability and efficient data handling.",
      exploreLink: "https://student-info-portal-five.vercel.app/",
      codeLink: "https://github.com/JaseemKhan211/Student-Info-Portal",
    },
    {
      title: "🛠️ Complaint Management System",
      description:
        "Streamline the complaint resolution process with a system that allows students to submit complaints effortlessly while enabling universities to address them efficiently. Designed with ERD, Class Diagram, and Use Case Diagram, and built using Oracle APEX, Oracle Database, SQL, PL/SQL, JavaScript, SweetAlert2, and AJAX.",
      exploreLink:
        "https://apex.oracle.com/pls/apex/r/jasorcel/complaint-management-system-cms/login",
      diagramLink:
        "https://lucid.app/lucidchart/3ca33e50-87af-4313-9dd1-fde5a65107c6/edit?viewport_loc=397%2C-892%2C1899%2C873%2C0_0&invitationId=inv_7239df70-3d5b-4aee-9014-6adc458fbc79",
    },
    {
      title: "PakWheels Imported Cars DataScrap 🚗",
      description:
        "Scraped and analyzed PakWheels imported cars data using Python with libraries like Pandas, BeautifulSoup, and Requests to extract and deliver valuable insights efficiently.",
      link: "https://github.com/JaseemKhan211/PakWheels-Imported-Cars-DataScrap",
    },
    {
      title: "✅ Todo - Effortless Task Management App",
      description:
        "Achieve effortless task management with seamless CRUD operations and real-time updates. Built using JavaScript, HTML5, and CSS3, this app ensures productivity with a user-friendly interface.",
      link: "https://github.com/JaseemKhan211/Todo-App",
    },
  ];

  return (
    <div className="min-h-screen p-6 text-white">
      <div className="max-w-5xl mx-auto">
        {/* <h1 className="text-3xl font-bold mb-6 text-center">Projects</h1> */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-[#333333] rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  className="text-blue-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Code here
                </a>
              )}
              {project.prototypeLink && (
                <div>
                  <a
                    href={project.prototypeLink}
                    className="text-green-400 underline block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Prototyping here
                  </a>
                  {project.links.map((subLink, subIndex) => (
                    <a
                      key={subIndex}
                      href={subLink}
                      className="text-blue-400 underline block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {subIndex === 0 ? "Check Frontend Code here" : "Check Backend Code here"}
                    </a>
                  ))}
                </div>
              )}
              {project.exploreLink && !project.codeLink && (
                <a
                  href={project.exploreLink}
                  className="text-green-400 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore Application
                </a>
              )}
              {project.title === "Student Information Portal 🎓" && (
                <div className="space-y-2">
                  <a
                    href={project.exploreLink}
                    className="text-green-400 underline block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore Application
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-orange-400 underline block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Code here
                  </a>
                </div>
              )}
              {project.diagramLink && (
                <a
                  href={project.diagramLink}
                  className="text-orange-400 underline block mt-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check ERD Diagram here
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;