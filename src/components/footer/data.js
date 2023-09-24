import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import React from "react";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 4, link: "#portfolio", title: "Portfolio" },
  { id: 5, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "mailto:anushka.dkj@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/anushkajn/",
    icon: <AiFillLinkedin />,
  },
  {
    id: 3,
    link: "https://github.com/pixel97",
    icon: <AiFillGithub />,
  },
];
