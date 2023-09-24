import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import React from "react";

const data = [
  {
    id: 1,
    link: "mailto:anushka.dkj@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    id: 2,
    link: "https://github.com/pixel97",
    icon: <AiFillGithub />,
  },
  {
    id: 3,
    link: "https://www.linkedin.com/in/anushkajn/",
    icon: <AiFillLinkedin />,
  },
];

export default data;
