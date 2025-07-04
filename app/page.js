'use client';
import Header from './frontend/components/Header';
import About from './frontend/components/About';
import Skills from './frontend/components/Skills';
import Projects from './frontend/components/Projects';
import Contact from './frontend/components/Contact';
import Footer from './frontend/components/Footer';
import Navbar from './frontend/components/Navbar';
import { FileCode, Palette, SquareStack, Code, Database ,Briefcase,Layout, Globe } from 'lucide-react';


export default function Home() {
  const nameFull = 'Kago Phuthego';
  const titleFull = 'Junior Developer';

  const skills = [
    { name: 'HTML5', icon: <FileCode size={24} /> },
    { name: 'CSS3', icon: <Palette size={24} /> },
    { name: 'Bootstrap', icon: <SquareStack size={24} /> },
    { name: 'JavaScript', icon: <Code size={24} /> },
    { name: 'SQL Basics (Learning)', icon: <Database size={24} /> },
    { name: 'PHP', icon: <FileCode size={24} /> },
  ];

  const projects = [
   
    {
      name: 'HTML/CSS/Bootstrap Portfolio',
      description: 'My first portfolio showcasing my early work with pure HTML, CSS, and Bootstrap, demonstrating responsive design and front-end fundamentals.',
      icon: <Briefcase size={24} />,
      link: 'https://github.com/Kartellxrd16/portfolio.git', 
    },
    
    {
      name: 'Industrial Attachment Management System (IAMS)',
      description: 'The project aims to develop an automated Industrial Attachment Management System (IAMS). (Work in Progress)',
      icon: <Layout size={24} />,
      link: 'https://github.com/Kartellxrd16/iams.git', 
    },
    
    {
      name: 'Modern Next.js Portfolio', 
      description: 'This is my current portfolio website, built with Next.js, React, and Tailwind CSS, showcasing responsive design, component-based architecture, and interactive typing effects.',
      icon: <Globe size={24} />, 
      link: 'https://github.com/Kartellxrd16/kago-portfolio.git', 
    },
  ];

  const accentColorForStyle = '#00BCD4';

  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center h-screen w-full font-inter bg-darkBg text-lightText">
        <Header name={nameFull} title={titleFull} accentColor={accentColorForStyle} />
      </main>
      <div className="bg-darkBg text-lightText">
        <About accentColor={accentColorForStyle} />
        <Skills skills={skills} accentColor={accentColorForStyle} />
        <Projects projects={projects} accentColor={accentColorForStyle}/>
        <Contact accentColor={accentColorForStyle} />
      </div>
      <div className="bg-darkBg text-lightText">
        <Footer />
      </div>
    </>
  );
}