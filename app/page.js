'use client';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { FileCode, Palette, SquareStack, Code, Database ,Briefcase,Layout, Globe } from 'lucide-react'; // Added Globe icon

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
      link: null, // 
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