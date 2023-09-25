import React from "react";
import "./about.css";
import AboutMeImage from "../../assets/AboutMe.jpeg";
import Resume_Anushka_Jain from "../../assets/Resume_Anushka_Jain.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../Card";
import data from "./data";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__potrait">
            <img src={AboutMeImage} alt="Anushka Jain About Me" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            A self motivated, collaborative and self taught Software Developer,
            currently pursuing master’s in computer science at Northeastern
            University, Boston. I enjoy problem solving, building applications
            and learning new technologies. I entered into corporate world 2
            years ago and since then the journey has been a joyful ride as a
            software developer. Recently I interned as a Software Developer at Akoya involving backend
            and front end development.
          </p>
          <p>
            My technical skills include : Golang, Java, Python, R, SQL, React,
            NodeJS, Javascript, MongoDB and Oracle database. Looking forward to
            make new connections and explore opportunities in the technical
            field.
          </p>
          <a href={Resume_Anushka_Jain} download className="btn primary">
            Download Resume <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
