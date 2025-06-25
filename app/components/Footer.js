// components/Footer.js
 export default function Footer(){
    return(
        <footer className="text-center p-6 bg-darkCard border-t border-gray-700 text-midText">
        © {new Date().getFullYear()} Kago Phuthego. All rights reserved.
      </footer>
    );
 }