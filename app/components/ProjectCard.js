"use client";
import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react'; 

export default function({ project, accentColor }){
  if (!project) {
    return null;
  }

  return (
    <div
      className="bg-darkCard p-6 rounded-lg shadow-lg border-l-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
      style={{ borderColor: accentColor }}
    >
      <div className="mb-4 text-accentTeal">{project.icon}</div>
      <h3 className="font-semibold text-2xl mb-2 text-lightText">{project.name}</h3>
      <p className="text-midText text-base mb-4 flex-grow">{project.description}</p>

      {project.link && ( 
        <Link
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center
                     bg-gradient-to-r from-accentTeal to-blue-500
                     text-darkBg px-4 py-2 rounded-md font-semibold
                     transition duration-300 ease-in-out
                     shadow-md hover:shadow-lg hover:from-accentTeal-dark hover:to-blue-600 hover:scale-105"
                     
        >
          View Project <ExternalLink size={20} className="ml-2" />
        </Link>
      )}
    </div>
  );
};

