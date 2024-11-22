import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data"; // assuming skills is an array of skill names.

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ChipIcon className="w-12 inline-block mb-6 text-green-500" />
          <h1 className="text-4xl font-semibold text-gray-800 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I have experience with a variety of languages and tools. Below is a collection of technologies I’ve worked with:
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-center items-center"
            >
              {/* Skill Content: Badge (Icon) + Skill Name */}
              <BadgeCheckIcon className="text-green-500 w-12 h-12 mb-4" />
              <span className="text-xl font-medium text-gray-800">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
