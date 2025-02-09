import React from 'react';

const blogs = [
  {
    title: "How to Write CI/CD Pipeline Documentation",
    description:
      "A guideline offers a practical overview of implementing a CI/CD pipeline to streamline software development, improve testing, and enhance deployment efficiency.",
    link: "https://how-to-write-cicd-pipeli-aarym6t.gamma.site/",
  },
  {
    title:
      "Effortless Integration of Node.js with Oracle Database and Oracle APEX RESTful API Services: A Practical Approach",
    description:
      "This article provides a practical guide to seamlessly integrating Node.js with Oracle Database and Oracle APEX RESTful API services. It covers setting up connections, handling queries, and using APIs efficiently to build robust applications.",
    link: "https://medium.com/@jaseemkhandev/effortless-node-js-and-oracle-database-integration-a-practical-approach-45900e1f1834",
  },
  {
    title: "Rest Parameters (‘…args’) vs ‘arguments’ in JavaScript",
    description:
      "This article explains the differences between rest parameters (...args) and the arguments object in JavaScript. It highlights how rest parameters provide a cleaner syntax and work with modern ES6+ features, while arguments is an older construct with some limitations.",
    link: "https://medium.com/@jaseemkhandev/rest-parameters-args-vs-arguments-in-javascript-eab0b2b5e3b9",
  },
  {
    title: "Updating Package-Lock File: npm Warns of an Outdated Version",
    description:
      "This article discusses how to resolve the common npm warning about an outdated package-lock file. It highlights the importance of keeping dependencies synchronized and provides simple steps to update the file using npm install or regenerate it with npm ci.",
    link: "https://medium.com/@jaseemkhandev/updating-package-lock-file-npm-warns-of-an-outdated-version-a7aeb71bfbe5",
  },
  {
    title: "Sweet Alert JavaScript Library With Oracle Apex",
    description:
      "A complete guide to integrating Sweet Alert with Oracle APEX.",
    link: "https://medium.com/@jaseemkhandev/sweet-alert-javascript-library-with-oracle-apex-a8c082fa6e20",
  },
  {
    title: "React vs. Angular: The Complete Comparison",
    description:
      "This article discusses the differences, pros, and cons of both React and Angular.",
    link: "https://medium.com/@jaseemkhandev/react-vs-angular-the-complete-comparison-8b6ee68e4e8e",
  },
];

const Blog = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <ul className="space-y-5">
        {blogs.map((blog, index) => (
          <li key={index} className="flex items-start pb-4">
            <div className="w-1 mr-1"></div>
            <div className="w-2 h-20 bg-[#333333] rounded mr-4"></div>
            <div>
              <h2 className="text-xl text-white font-semibold">{blog.title}</h2>
              <p className="text-white mb-3">{blog.description}</p>
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#333333] text-white text-sm font-medium rounded-md hover:bg-white hover:text-black"
              >
                Read More
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;