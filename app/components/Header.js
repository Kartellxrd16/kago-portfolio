'use client';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Header({ name, title, accentColor }) {
  const headerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); 
  const [hasAnimated, setHasAnimated] = useState(false); 

  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
         
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true); 
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.5 } 
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, [hasAnimated]); 

  return (
    <div ref={headerRef} className="w-full flex flex-col justify-center items-center p-8 md:p-20 relative h-screen bg-darkBg text-lightText">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-base md:text-lg text-midText font-bold z-10">Hi, I am</h2>
        <h1 className="text-5xl md:text-6xl font-bold mt-2 text-lightText z-10">
          {/* TypeAnimation for Name */}
          {isVisible ? (
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
            
            <span>{name}</span>
          )}
        </h1>
        <p className="text-4xl md:text-5xl font-semibold z-10" style={{ color: accentColor }}>
          {/* TypeAnimation for Title */}
          {isVisible ? (
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