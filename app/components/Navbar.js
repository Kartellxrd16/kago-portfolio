import Link from "next/link";
import Image from "next/image";



export default function Navbar(){
    return(
        
        <div className="navbar bg-darkBg text-lightText">
                <Link href="/" className="flex items-center"> 
                    <Image 
                        src='/logo1.png' 
                        alt="Logo" 
                        width={50}
                        height={50}
                        priority
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