function MainContent() {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold mt-14 text-[#F8F1F1]">Hi, I'm Jaseem Khan</h2>
        
        <p className="text-center text-lg mt-6 leading-relaxed text-[#F8F1F1]">
          A Software Engineer specializing in Full Stack development. I build scalable, secure, and user-centric applications by combining strong architectural design with clean, efficient code. 
          From front-end interfaces to back-end systems and database integration, I ensure smooth end-to-end functionality. 
          With hands-on experience in modern frameworks and enterprise-grade technologies, I focus on delivering high-performance solutions that align with real-world business needs. 
          Passionate about continuous learning, I stay updated with evolving trends to craft impactful and future-ready digital products.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="/pdf/Resume.pdf"
            download
            className="bg-[#333333] text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black"
          >
            Download Resume
          </a>
          <a
            href="mailto:jaseemkhandev@gmail.com"
            className="bg-[#333333] text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black"
          >
            Send Email
          </a>
        </div>
      </div>
    )
}

export default MainContent;