'use client';
import Image from 'next/image'; // Import the Image component

export default function About ({ accentColor }) {
  return (
    <section id="about" className="p-8 md:p-16 bg-darkBg text-lightText flex flex-col items-center relative overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-lightText hover:text-accentTeal transition-colors duration-300">
        About Me
      </h2>
      <div className="max-w-3xl text-center">
        {/* Changed <img> to <Image /> */}
        <Image
          src="/kago.jpeg" // Path to your image
          alt="Kago Phuthego"
          width={128} // Specify the intrinsic width of your image (w-32 is 128px in default Tailwind scale)
          height={128} // Specify the intrinsic height of your image (h-32 is 128px in default Tailwind scale)
          className="rounded-full w-32 h-32 object-cover mx-auto border-2 border-accentTeal shadow-lg shadow-accentTeal/50"
          priority // Add priority if this image is visible on first load (which it likely is)
        />
        <p className="text-midText text-lg leading-relaxed">
          Hello! I&apos;m Kago Phuthego...
          <span className="font-bold hover:text-lightText transition duration-300 ease-in-out cursor-pointer" style={{ color: accentColor }}> Junior Web Developer</span>
          based in Botswana. I enjoy turning ideas into reality through code and creating visually appealing and user-friendly websites.
        </p>
        <p className="text-midText text-lg leading-relaxed mt-4">
          I have a solid foundation in front-end technologies and am eager to learn and grow in the ever-evolving world of web development. My goal is to build impactful and accessible web solutions that make a difference.
        </p>
        <p className="text-midText text-lg leading-relaxed mt-4">
          When I&apos;m not coding, you can find me exploring new tech trends, contributing to open-source projects, or enjoying a good book. I&apos;m always open to collaborating on exciting projects and connecting with fellow developers!
        </p>
      </div>
      <div className="bubbles">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <style jsx>{`
        .bubbles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .bubble {
          position: absolute;
          bottom: -50px;
          background: ${accentColor};
          border-radius: 50%;
          animation: rise 20s infinite;
        }
        .bubble:nth-child(1) {
          width: 50px;
          height: 50px;
          left: 10%;
          animation-delay: 0s;
        }
        .bubble:nth-child(2) {
          width: 70px;
          height: 70px;
          left: 20%;
          animation-delay: 2s;
        }
        .bubble:nth-child(3) {
          width: 30px;
          height: 30px;
          left: 40%;
          animation-delay: 4s;
        }
        .bubble:nth-child(4) {
          width: 60px;
          height: 60px;
          left: 60%;
          animation-delay: 6s;
        }
        .bubble:nth-child(5) {
          width: 80px;
          height: 80px;
          left: 80%;
          animation-delay: 8s;
        }
        .bubble:nth-child(6) {
          width: 40px;
          height: 40px;
          left: 90%;
          animation-delay: 10s;
        }
        @keyframes rise {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-600px);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};