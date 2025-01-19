import React from "react";
import { MobileOutlined, CodeOutlined } from "@ant-design/icons";
function Services() {
  return (
    <section className="py-20 bg-gray-100" id="services">
      <h2 className="text-4xl font-bold text-center text-gray-900">
        Our Services
      </h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
        <div className="p-6 border rounded-lg shadow-lg text-gray-900">
          <h3 className="text-2xl font-semibold text-gray-900">
            <CodeOutlined className="mr-4 text-blue-500 text-2xl" />
            Web Development
          </h3>
          <p className="mt-2 text-gray-700">
            At TechX, we build modern, responsive, and scalable web applications
            using a robust tech stack that includes React, Next.js, Node.js,
            NestJS, PostgreSQL, and MongoDB. Whether you&apos;re looking for
            dynamic single-page applications or complex server-side rendered
            websites, we leverage these technologies to create fast, secure, and
            reliable solutions.
          </p>
          <p className="mt-2 text-gray-700">
            With React and Next.js, we craft high-performance UIs that are both
            interactive and SEO-friendly. For the backend, we utilize Node.js
            and NestJS to build scalable, maintainable APIs, ensuring seamless
            integration with your frontend. Our expertise in PostgreSQL and
            MongoDB enables us to implement flexible and efficient data storage
            solutions that cater to your application&apos;s needs.
          </p>
          <p className="mt-2 text-gray-700">
            We prioritize performance, security, and user experience, ensuring
            that your web app is optimized, scalable, and built to adapt to
            future needs.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg ">
          <h3 className="text-2xl font-semibold text-gray-900">
            App Development{" "}
            <MobileOutlined className="mr-4 text-blue-500 text-2xl" />
          </h3>
          <p className="mt-2 text-gray-700">
            At TechX, we specialize in building high-performance mobile
            applications using React Native, a powerful framework that enables
            us to develop cross-platform apps for both iOS and Android. Our
            approach ensures your app reaches a wider audience while maintaining
            the performance and user experience of native applications.
          </p>
          <p className="mt-2 text-gray-700">
            We focus on delivering fast, reliable, and feature-rich mobile apps
            that are tailored to meet your business goals. From intuitive
            interfaces to seamless navigation, we ensure a smooth and engaging
            experience for your users across all devices.
          </p>
          <p className="mt-2 text-gray-700">
            With React Native, we ensure faster development cycles, easier
            maintenance, and scalability, allowing you to stay ahead in the
            competitive mobile app market.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
