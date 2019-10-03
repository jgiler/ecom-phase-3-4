/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => (
  <footer className="page-footer font-small cyan darken-3">
    {/* <div className="footer">
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
            className="fab fa-facebook-square"
          >
            Facebook
          </a>
        </li>
      </ul>
      <p className="copyright">Copyright 2019, Jonathan Giler</p>
      <p>Last updated: Friday, August 16th, 2019</p> */}
    <div className="container">
      {/* Grid row*/}
      <div className="row">
        {/* Grid column */}
        <div className="col-md-12 py-5" id="social-icon">
          <div className=" flex-center">
            {/* Facebook */}
            <a className="fb-ic" href='https://www.facebook.com/jonathan.giler.9'>
              <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            {/* Twitter */}
            <a className="tw-ic" href='https://twitter.com/'>
              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            {/* Google +*/}
            <a className="gplus-ic" href='https://aboutme.google.com/u/0/?referer=gplus'>
              <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            {/*Linkedin */}
            <a className="li-ic" href='https://www.linkedin.com/feed/'>
              <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            {/*Instagram*/}
            <a className="ins-ic" href='#'>
              <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                {" "}
              </i>
            </a>
            {/*Pinterest*/}
            <a className="pin-ic" href='#'>
              <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
            </a>
          </div>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row*/}
    </div>
    {/* Footer Elements */}
    {/* Copyright */}
    <div className="footer-copyright text-center py-3">
      © 2019 Copyright by 
    </div>
    <NavLink exact to="/" className="logo">
      <img
        src="https://bit.ly/2TBdjIN"
        alt="chill logo"
        className="footerlogo"
      />
    </NavLink>
  </footer>
);

export default Footer;
