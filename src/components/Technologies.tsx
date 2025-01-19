import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNestjs, SiMongodb, SiPostgresql, SiNextdotjs } from "react-icons/si";

function Technologies() {
  return (
    <section className="py-20 text-center bg-gray-900" id="technologies">
      <h2 className="text-4xl font-bold">Technologies We Use</h2>
      <div className="flex justify-center items-center gap-8 mt-8">
        <FaReact size={50} color="#61DAFB" />
        <FaNodeJs size={50} color="#68A063" />
        <SiNextdotjs size={50} />
        <SiNestjs size={50} color="#E0234E" />
        <SiMongodb size={50} color="#4DB33D" />
        <SiPostgresql size={50} color="#336791" />
      </div>
    </section>
  );
}

export default Technologies;
