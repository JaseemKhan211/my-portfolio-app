import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "MindMingle Quiz - Interactive Quiz App",
    description:
      "Real-time interactive quiz platform for admins and students, built with Node.js, MongoDB, and Socket.io for seamless functionality.",
    codeLink: "https://github.com/JaseemKhan211/MindMingle-Quiz",
    icon: "🔄",
  },
  {
    title: "DineNear - Restaurant Finder App",
    description:
      "Effortlessly discover nearby restaurants with your ultimate dining companion, built with Flutter, Node.js, and MongoDB.",
    prototypeLink:
      "https://www.figma.com/proto/JnaodGW2jx1MECgrDD4lVk/Untitled?page-id=0%3A1&node-id=11-5&p=f&viewport=2417%2C1878%2C0.54&t=DkkAAPJu7wADhkn0-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A5",
    frontendCodeLink: "https://github.com/JaseemKhan211/DineNear-Frontend",
    backendCodeLink: "https://github.com/JaseemKhan211/DineNear-Backend",
    icon: "🍔",
  },
  {
    title: "Student Information Portal",
    description:
      "Seamless registration, profile uploads, and instant report generation in a user-friendly portal.",
    appLink: "https://student-info-portal-five.vercel.app/",
    codeLink: "https://github.com/JaseemKhan211/Student-Info-Portal",
    icon: "🎓",
  },
  {
    title: "Complaint Management System - CMS",
    description:
      "CMS helps students submit complaints easily. It helps the university handle and solve issues efficiently.",
    appLink:
      "https://apex.oracle.com/pls/apex/r/jasorcel/complaint-management-system-cms/login",
    codeLink: "https://github.com/JaseemKhan211/PakWheels-Imported-Cars-DataScrap",
    erdDiagramLink:
      "https://lucid.app/lucidchart/3ca33e50-87af-4313-9dd1-fde5a65107c6/edit?viewport_loc=397%2C-892%2C1899%2C873%2C0_0&invitationId=inv_7239df70-3d5b-4aee-9014-6adc458fbc79",
    icon: "🛠️",
  },
  {
    title: "PakWheels Imported Cars DataScrap",
    description:
      "Scraped and analyzed PakWheels imported cars data using Python to deliver valuable insights.",
    codeLink: "https://github.com/JaseemKhan211/PakWheels-Imported-Cars-DataScrap",
    icon: "🚗",
  },
  {
    title: "Todo - Effortless Task Management App",
    description:
      "Effortless task management with seamless CRUD operations and real-time updates to keep you organized daily.",
    codeLink: "https://github.com/JaseemKhan211/Todo-App",
    icon: "🗂️",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="w-full md:w-1/2 lg:w-1/3 p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="h-full">
        <CardContent>
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-3xl">{project.icon}</span>
            <h3 className="text-xl text-black font-semibold">{project.title}</h3>
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="space-y-2">
            {project.codeLink && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-between text-white bg-[#333333] hover:bg-gray-700 h-10"
                as="a"
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code <ArrowRight size={16} />
              </Button>
            )}
            {project.appLink && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-between text-white bg-[#333333] hover:bg-gray-700 h-10"
                as="a"
                href={project.appLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore App <ArrowRight size={16} />
              </Button>
            )}
            {project.prototypeLink && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-between text-white bg-[#333333] hover:bg-gray-700 h-10"
                as="a"
                href={project.prototypeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Prototype <ArrowRight size={16} />
              </Button>
            )}
            {project.frontendCodeLink && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-between text-white bg-[#333333] hover:bg-gray-700 h-10"
                as="a"
                href={project.frontendCodeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Frontend Code <ArrowRight size={16} />
              </Button>
            )}
            {project.backendCodeLink && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-between text-white bg-[#333333] hover:bg-gray-700 h-10"
                as="a"
                href={project.backendCodeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Backend Code <ArrowRight size={16} />
              </Button>
            )}
            {project.erdDiagramLink && (
              <Button
                variant="outline"
                className="w-full flex items-center justify-between text-white bg-[#333333] hover:bg-gray-700 h-10"
                as="a"
                href={project.erdDiagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                ERD Diagram <ArrowRight size={16} />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Project = () => {
  return (
    <div className="min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;