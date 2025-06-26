'use client';
import { Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Contact({ accentColor }){
  const [showMessage, setShowMessage] = useState(true);

  // Set the form inputs to be disabled, but the button will keep its style
  const isFormDisabled = true; // <-- This still controls the 'disabled' attribute

  return (
    <section id="contact" className="p-8 md:p-16 bg-darkBg text-lightText">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-lightText" style={{ color: accentColor }}>Get In Touch</h2>

      <div className="max-w-xl mx-auto space-y-6">
        {showMessage && (
         
          <div className="bg-darkCard border border-accentTeal text-lightText px-4 py-3 rounded relative mb-6" role="alert">
            <strong className="font-bold" style={{ color: accentColor }}>Notice:</strong> 
            <span className="block sm:inline ml-2">Contact form is currently unavailable. Please use social links.</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3 cursor-pointer" onClick={() => setShowMessage(false)}>
              <svg className="fill-current h-6 w-6 text-lightText hover:text-accentTeal" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.63a1.2 1.2 0 1 1-1.697-1.697l2.758-2.758-2.758-2.757a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697l-2.758 2.758 2.758 2.757a1.2 1.2 0 0 1 0 1.697z"/></svg>
            </span>
          </div>
        )}

        
        <form action="mailto:kagophuthego0316@gmail.com" method="post" encType="text/plain" className="max-w-xl mx-auto space-y-6 bg-darkCard p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="w-full border border-gray-700 p-3 rounded-md focus:ring-2 focus:ring-accentTeal focus:border-transparent bg-gray-800 text-lightText"
              required
              disabled={isFormDisabled} // <-- ADDED disabled attribute
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email address"
              className="w-full border border-gray-700 p-3 rounded-md focus:ring-2 focus:ring-accentTeal focus:border-transparent bg-gray-800 text-lightText"
              required
              disabled={isFormDisabled} // <-- ADDED disabled attribute
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              placeholder="Message"
              rows={5}
              className="w-full border border-gray-700 p-3 rounded-md resize-y focus:ring-2 focus:ring-accentTeal focus:border-transparent bg-gray-800 text-lightText"
              required
              disabled={isFormDisabled} // <-- ADDED disabled attribute
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-accentTeal to-blue-500 text-darkBg px-6 py-3 rounded-md font-semibold
                       hover:shadow-lg hover:from-accentTeal-dark hover:to-blue-600 hover:scale-105
                       transition duration-300 ease-in-out shadow-md focus:outline-none focus:ring-2 focus:ring-accentTeal focus:ring-opacity-50"
            disabled={isFormDisabled} // <-- Button is still functionally disabled
          >
            Send Message <Mail className="inline ml-2" size={20} />
          </button>
        </form>

        <p className="text-center text-lightText text-lg mb-4">Feel free to reach out! I&apos;d love to connect, collaborate, or chat about projects and ideas. If you have a question or just want to say hello, message me on my social media spaces.</p>
        <div className="text-center flex justify-center gap-6 social-icons">
          <Link href="https://github.com/Kartellxrd16" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-lightText hover:text-accentTeal transition duration-200">
            <Github size={28} />
          </Link>
          <Link href="https://linkedin.com/in/kagophuthego" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-lightText hover:text-accentTeal transition duration-200">
            <Linkedin size={28} />
          </Link>
          <Link href="mailto:kagophuthego0316@gmail.com" aria-label="Email Me" className="text-lightText hover:text-accentTeal transition duration-200">
            <Mail size={28} />
          </Link>
        </div>
      </div>
    </section>
  );
};