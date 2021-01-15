import React from "react";
import "./footer.css"



const Footer = () => {
    return (
        
            <ul className="nav justify-content-center fixed-bottom">
                <li className="nav-item">
                    <a className="nav-link" href="https://github.com/v-lax" target="_blank" rel="noreferrer">GitHub</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/valliappan-lakshmanan-58470757/" target="_blank" rel='noreferrer'>LinkedIn</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/vlakshmanan_resume.pdf" target="_blank" rel="noreferrer">Resume</a>
                </li>
            </ul>
    
    );
}

export default Footer;