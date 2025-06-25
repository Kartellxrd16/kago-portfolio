'use client';
import { Mail, Github, Linkedin, Download } from 'lucide-react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import Typewriter with SSR disabled
const DynamicTypewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

export default function Header({ name, title, accentColor }) {
  return (
    <div className="w-full flex flex-col justify-center items-center p-8 md:p-20 relative overflow-hidden h-full bg-darkBg text-lightText">
      <div className="flex flex-col justify-center items-center text-center h-full">
        <h2 className="text-base md:text-lg text-midText font-bold z-10">Hi, I am</h2>
        <h1 className="text-5xl md:text-6xl font-bold mt-2 text-lightText z-10">
          {/* Add component='span' to render a span instead of a div */}
          <DynamicTypewriter
            options={{
              strings: [name],
              autoStart: true,
              loop: false,
              delay: 75,
              deleteSpeed: 0, // Don't delete for static names/titles
              cursor: '' // Hide cursor if you don't want it after typing
            }}
            onInit={(typewriter) => {
              typewriter.typeString(name).start();
            }}
            component="span" 
          />
        </h1>
        <p className="text-4xl md:text-5xl font-semibold z-10" style={{ color: accentColor }}>
          {/* Add component='span' to render a span instead of a div */}
          <DynamicTypewriter
            options={{
              strings: [title],
              autoStart: true,
              loop: false,
              delay: 75,
              deleteSpeed: 0, // Don't delete for static names/titles
              cursor: '' // Hide cursor if you don't want it after typing
            }}
            onInit={(typewriter) => {
              typewriter.typeString(title).start();
            }}
            component="span" // <-- IMPORTANT: Add this prop
          />
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
            href="/mycv.pdf"
            download
            className="flex items-center bg-accentTeal hover:bg-opacity-80 text-darkBg font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out shadow-lg"
          >
            <Download size={20} className="mr-2" /> Download CV
          </Link>
        </div>
      </div>
    </div>
  );
}