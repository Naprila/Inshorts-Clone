import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by - {"  "}
        <a
          href="https://www.linkedin.com/in/LINKEDIN_NAME/"
          target="_blank"
          rel="noreferrer"
        >
          Manish Kumar
        </a>
      </span>
      <hr style={{ width: "90%" }}></hr>
      <div className="iconContainer">
        <a
          href="https://www.instagram.com/naprila/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-square-instagram fa-1x"></i>
        </a>
        <a
          href="https://www.linkedin.com/naprila/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin fa-1x "></i>
        </a>
        <a href="https://www.netlify.app" target="_blank" rel="noreferrer">
          <i className="fa-solid fa-link fa-1x"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;

