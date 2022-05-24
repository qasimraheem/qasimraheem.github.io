import { useState, useEffect } from "react";
import icon from '../../images/hamburger.png';
import Navbar from "../Navbar/navbar";

import './header.css';

function Header() {
    const [showHeader,setShowHeader] = useState(false);
    const [width, setWidth]   = useState(window.innerWidth);
    
    const updateDimensions = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const closeHeader = ()=>{
        setShowHeader(!showHeader);
    }
    return (
        <header className="header">
            <div className="outer_container">
                <div className="logo_container">
                    <h1>PingDev</h1>
                </div>
                <nav className="nav_bar">
                    { width > 730 &&
                     <Navbar />
                    }

                    { width <= 730 && showHeader &&
                        <Navbar closeHeader={closeHeader}/>
                    }
                    <figure className="hamburger">
                        <img 
                        src={icon}
                        onClick={()=>setShowHeader(!showHeader)}    
                    />
                    </figure>
                    
                </nav>
              
            </div>
           
        </header>
    );
  }

export default Header;