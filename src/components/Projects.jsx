import React, { useState, useEffect } from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";




function Projects() {


  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-center my-20 text-4xl text-neutral-400"
      >
        Projects {`(${PROJECTS.length})`}
      </motion.h2>

      <div>
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="flex flex-wrap mb-8 lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="w-full lg:w-1/4 relative"
            >
              <a
                href={project.url !== "home" ? project.url : undefined}
                onClick={
                  project.url === "home"
                    ? (e) => {
                        e.preventDefault();
                        document
                          .getElementById("home")
                          .scrollIntoView({ behavior: "smooth" });
                      }
                    : undefined
                }
                target={project.url !== "home" ? "_blank" : undefined}
                rel="noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  height={150}
                  width={150}
                  className="mb-6 rounded object-contain h-30 w-40 md:hover:scale-110 transition ease-in-out duration-200 cursor-pointer"
                />
              </a>

              
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1.5 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="py-1 px-2 bg-neutral-800 rounded text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;