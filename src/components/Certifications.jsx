import React from 'react'

const Certifications = () => {
  return (
    <div name="certifications" className="w-full min-h-screen text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto md:px-16 p-4 flex flex-col justify-center w-full h-full">
        {/* Title */}
        <div className="mb-5">
          <p className="text-4xl font-bold inline border-b-4 border-[#60f7d4]">Education</p>
          <p className="py-4">
            <span className="text-gray-600 text-xl font-semibold"> {'/*'} </span>
            I have taken some courses and certifications that have helped me to improve my skills and knowledge. These are some of them.
            <span className="text-gray-600 text-xl font-semibold"> {'*/'} </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Certifications