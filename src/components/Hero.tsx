import React from "react";

function Hero() {
  return (
    <section
      className="relative text-center text-gray-900 h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/2.jpg')" }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-600 bg-opacity-96"></div> */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-5xl md:text-6xl font-bold">Welcome to TechX</h1>
        <p className="mt-4 text-xl md:text-2xl">
          Your Partner in Modern Web and App Development
        </p>
        <a href="#contact">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Contact Us
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
