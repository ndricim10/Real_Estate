import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="socials">
          <div className="icons">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </div>
          <div className="icons">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </div>
        </div>
        <nav>
            <img src="https://futurehome.al/uploads/futurehome.al//1573668866-71467362-1763124320484691-389343582860869632-n.png"/>
            <ul>
                <li>Home</li>
                <li>Properties</li>
                <li>Offices</li>
                <li>Blog</li>
                <li>About us</li>
            </ul>
        </nav>
      </header>
    </>
  );
}
