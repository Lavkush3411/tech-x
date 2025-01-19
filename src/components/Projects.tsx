// import React from "react";
// import { Card, Col, Row } from "antd";

// const projects = [
//   {
//     title: "Project One",
//     description:
//       "A modern web application built using React and Next.js, providing seamless user experience.",
//     technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
//     image: "/project1.jpg", // Image URL
//   },
//   {
//     title: "Project Two",
//     description:
//       "A mobile app built with React Native, designed for iOS and Android with a smooth UI.",
//     technologies: ["React Native", "Node.js", "MongoDB"],
//     image: "/project2.jpg",
//   },
//   // Add more projects as needed
// ];

// const ProjectShowcase = () => {
//   return (
//     <section className="py-20 text-center" id="projects">
//       <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
//       <div className="mt-8">
//         <Row gutter={[16, 16]}>
//           {projects.map((project, index) => (
//             <Col span={24} sm={12} md={8} key={index}>
//               <Card
//                 hoverable
//                 cover={<img alt={project.title} src={project.image} />}
//                 className="shadow-lg rounded-lg"
//               >
//                 <h3 className="text-2xl font-semibold text-gray-900">
//                   {project.title}
//                 </h3>
//                 <p className="mt-2 text-gray-700">{project.description}</p>
//                 <div className="mt-2 text-sm text-gray-500">
//                   <strong>Technologies:</strong>{" "}
//                   {project.technologies.join(", ")}
//                 </div>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </section>
//   );
// };

// export default ProjectShowcase;
