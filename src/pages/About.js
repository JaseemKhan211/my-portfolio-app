function About() {
  return (
    <div className="mx-auto p-6 text-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Personal Information Section */}
        <section className="mb-8">
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-[#333333] rounded mr-4"></div>
            <h2 className="text-2xl font-semibold">Personal Information</h2>
          </div>
          <ul className="list-none space-y-4">
            <li className="flex">
              <strong className="w-40">Name:</strong>
              <span>Jaseem Khan</span>
            </li>
            <li className="flex">
              <strong className="w-40">Email:</strong>
              <span>jaseemkhandev@gmail.com</span>
            </li>
          </ul>
          <hr className="border-t-2 border-[#333333] mt-6" />
        </section>

        {/* Education Section */}
        <section>
          <div className="flex items-center mb-4">
            <div className="w-2 h-8 bg-[#333333] rounded mr-4"></div>
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <ul className="list-none space-y-4">
            <li className="flex">
              <strong className="w-40">Matriculation:</strong>
              <span>Govt. Irfan Boys Secondary School - Bio Science</span>
            </li>
            <li className="flex">
              <strong className="w-40">Intermediate:</strong>
              <span>Govt. Degree Boys College 5-L - Pre Engineering</span>
            </li>
            <li className="flex">
              <strong className="w-40">Bachelors:</strong>
              <span>
                Sindh Madressatul Islam University - Computer Science & Information Technology
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;