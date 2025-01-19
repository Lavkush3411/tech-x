import React from "react";

function About() {
  return (
    <section className="py-20 text-center bg-gray-900" id="about">
      <h2 className="text-4xl font-extrabold text-gray-100">About Us</h2>
      <p className="mt-4 text-lg text-gray-100 max-w-4xl mx-auto">
        At TechX, we specialize in delivering innovative web and mobile app
        solutions that help businesses thrive in the digital age. Our team is
        skilled in developing scalable and high-performance applications that
        are tailored to meet your unique needs.
      </p>
      <p className="mt-4 text-lg text-gray-100 max-w-4xl mx-auto">
        From responsive web apps to feature-rich mobile apps, we leverage the
        latest technologies to create seamless user experiences that drive
        engagement and growth. We work closely with our clients to ensure our
        solutions align with their business goals, providing both functionality
        and usability.
      </p>
      <p className="mt-4 text-lg text-gray-100 max-w-4xl mx-auto">
        {" "}
        Whether you’re looking to build a new app or improve an existing one,
        TechX is here to turn your ideas into impactful digital products.
      </p>
    </section>
  );
}

export default About;
