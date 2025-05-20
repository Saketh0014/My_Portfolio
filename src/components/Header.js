import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, url: 'https://github.com/Saketh0014', label: 'GitHub' },
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/sri-saketh-35767224a', label: 'LinkedIn' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/___.s_a_k_e_t_h.___/', label: 'Instagram' },
  { icon: <FaEnvelope />, url: 'mailto:srisaketh111@gmail.com', label: 'Email' },
];

const Header = () => {
  return (
    <header className="header-hero">
      <h1 className="header-name">Venkata Sri Saketh Perapragada</h1>
      <p className="header-tagline">Building creative, accessible, and performant web experiences.</p>
      <div className="social-icons">
        {socialLinks.map(({ icon, url, label }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="social-icon"
          >
            {icon}
          </a>
        ))}
      </div>
      <nav className="header-nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
        <a href="https://drive.google.com/file/d/1kwkxYWD9inXU5yO4aW7NbUFEdxkYcAR_/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</a>
      </nav>
    </header>
  );
};

export default Header;
