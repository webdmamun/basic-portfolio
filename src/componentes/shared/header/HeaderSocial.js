import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header-social">
      <a
        href="https://www.linkedin.com/in/mamun-ahmed-b9a8b917b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.linkedin.com/in/mamun-ahmed-b9a8b917b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/mamun-ahmed-b9a8b917b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsDribbble />
      </a>
    </div>
  );
};

export default HeaderSocial;
