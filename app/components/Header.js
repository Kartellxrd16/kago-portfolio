'use client'; 
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Header({ name, title, accentColor }) {
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); 
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Simply update isVisible based on intersection
          setIsVisible(entry.isIntersecting);
          // console.log('Header visibility changed:', entry.isIntersecting); // Optional for debugging
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    const currentRef = headerRef.current; // Capture the current ref value for cleanup

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) { // Use the captured value in cleanup
        observer.unobserve(currentRef);
      }
    };
  }, []); // <-- IMPORTANT: Dependency array is empty [] for continuous observation

  return (
    <div ref={headerRef} className="w-full flex flex-col justify-center items-center p-8 md:p-20 relative h-screen bg-darkBg text-lightText">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-base md:text-lg text-midText font-bold z-10">Hi, I am</h2>
        <h1 className="text-5xl md:text-6xl font-bold mt-2 text-lightText z-10">
          {/* Conditional rendering for TypeAnimation for the name */}
          {isVisible ? ( // Render if visible
            <TypeAnimation
              sequence={[
                name,
                1000,
                '',
                500,
              ]}
              wrapper="span"
              speed={50}
              cursor={false}
              repeat={Infinity}
            />
          ) : (
            // Fallback for name if not visible yet (shows full text instantly)
            <span>{name}</span>
          )}
        </h1>
        <p className="text-4xl md:text-5xl font-semibold z-10" style={{ color: accentColor }}>
          {/* Conditional rendering for TypeAnimation for the title */}
          {isVisible ? ( // Render if visible
            <TypeAnimation
              sequence={[
                title,
                1000,
                '',
                500,
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
            />
          ) : (
            // Fallback for title if not visible yet (shows full text instantly)
            <span>{title}</span>
          )}
        </p>
        <div className="flex gap-3 md:gap-4 mt-4 md:mt-6 z-10">
          <Link href="mailto:kagophuthego0316@gmail.com" className="social-link text-lightText hover:text-accentTeal">
            <Mail size={24} />
          </Link>
          <Link href="https://github.com/Kartellxrd16" target="_blank" rel="noopener noreferrer" className="social-link text-lightText hover:text-accentTeal">
            <Github size={24} />
          </Link>
          <Link href="https://linkedin.com/in/kagophuthego" target="_blank" rel="noopener noreferrer" className="social-link text-lightText hover:text-accentTeal">
            <Linkedin size={24} />
          </Link>
        </div>

        {/* Download CV Button */}
        <div className="mt-6 z-10">
          <Link
            href="/cv.pdf"
            download
            className="flex items-center bg-gradient-to-r from-accentTeal to-blue-500 text-darkBg font-bold py-3 px-6 rounded-lg
                       transition duration-300 ease-in-out shadow-lg
                       hover:shadow-xl hover:from-accentTeal-dark hover:to-blue-600 hover:scale-105"
          >
            <Download size={20} className="mr-2" /> Download CV
          </Link>
        </div>
      </div>
      
    </div>
  );
}