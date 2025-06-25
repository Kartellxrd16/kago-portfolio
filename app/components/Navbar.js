// components/Navbar.js
import Link from "next/link";

const logoSrc = "/logo1.png"; 

export default function Navbar(){
    return(
        
        <div className="navbar bg-darkBg text-lightText">
                <Link href="/" className="flex items-center"> 
                    <img 
                        src={logoSrc} 
                        alt="Logo" 
                        className="logo" 
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/150x50/0000FF/FFFFFF?text=BTU+Logo"; }}
                    />
                </Link>
                <ul> 
                    <li className="nav-link">
                        <Link href="#about" className="hover:text-accentTeal"> About </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="#skills" className="hover:text-accentTeal"> Skills</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="#projects" className="hover:text-accentTeal"> Portfolio</Link>
                    </li>
                    <li className="nav-link">
                        <Link href="#contact" className="hover:text-accentTeal"> Contact us</Link>
                    </li>
                </ul>
        </div>
    );
};