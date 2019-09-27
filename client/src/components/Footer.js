import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer className="">
    <div className="footer">
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jonathan-giler-a89682151/"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            className="fa fa-linkedin"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/jonathangiler/"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            className="fa fa-instagram"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/jonathan.giler.9"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
            className="fa fa-facebook"
          >
            Facebook
          </a>
        </li>
      </ul>
      <p className="copyright">Copyright 2019, Jonathan Giler</p>
      <p>Last updated: Friday, August 16th, 2019</p>
      <NavLink exact to="/" className="logo">
        <img
          src="https://bit.ly/2TBdjIN"
          alt="chill logo"
          className="footerlogo"
        />
      </NavLink>
    </div>
  </footer>
);

export default Footer;
