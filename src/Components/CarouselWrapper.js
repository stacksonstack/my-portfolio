import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class CarouselWrapper extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img
            id="about-me-img"
            src="/ProjectImages/aboutMe2.png"
            alt="collage of Stacey, three dogs, 1 cat, and 1 turtle"
          />
        </div>
        <div>
          <img
            id="about-me-img-back"
            src="/ProjectImages/aboutMe2.png"
            alt="collage of Stacey, three dogs, 1 cat, and 1 turtle"
          />
          <p className="legend" id="legend">
            Hello! My name is Stacey and I'm a 23 yr old, NYC Based- Mexican-American,
            full-stack web developer. Welcome to my portfolio! <br/>FUN FACT: I have 3 dogs, 1 cat, and a
            turtle. If you want to learn more about my journey keep watching
            this animation, otherwise feel free to explore my website or send me
            an email by filling out the form in the contact page.
          </p>
        </div>
        <div>
          <img
            id="about-me-img"
            src="/ProjectImages/laGuardia.png"
            alt="school  building with laGuardia logo on the side"
          />
        </div>
        <div>
          <img
            id="about-me-img-back"
            src="/ProjectImages/laGuardia.png"
            alt="school  building with laGuardia logo on the side"
          />
          <p className="legend" id="legend">
            I first learned how to code during my time at LaGuardia Community
            College. I began by taking free courses on Code Academy to prepare
            for my programming classes. However, it was not until I attended my
            college Web Development 101 course that I discovered my passion for
            design-driven web applications. I graduated with honors in August
            2020.
          </p>
        </div>
        <div>
          <img
            id="about-me-img"
            src="/ProjectImages/flatironSchool.png"
            alt="city buildings with flatiron school logo"
          />
        </div>
        <div>
          <img
            id="about-me-img-back"
            src="/ProjectImages/flatironSchool.png"
            alt="city buildings with flatiron school logo"
          />
          <p className="legend" id="legend">
            A month later, I attended Flatiron School to improve upon my
            programming skills. I worked on labs and built full-stack projects
            with talented software engineering students. I adopted the title
            CSStacey as I helped many in my cohort learn how to write modern
            CSS. Collaborating with my peers enabled me to solidify CSS concepts
            such as Flexbox, Grid, Animations, and many more. I graduated in
            January 2020.
          </p>
        </div>
        <div>
          <img
            id="about-me-img"
            src="/ProjectImages/graduation.png"
            alt="students celebrating their graduation"
          />
        </div>
        <div>
          <img
            id="about-me-img-back"
            src="/ProjectImages/graduation.png"
            alt="students celebrating their graduation"
          />
          <p className="legend" id="legend">
            {" "}
            I'm currently working to improve my skills as a Software Engineer by
            practicing algorithms on websites like Leet Code & HackerRank. I've
            also begun to refactor my passion projects which feature a Beatles
            fan site written in React. I'm also building a website for a small nyc based company, Heavenly Delights. I'm continuing to improve my
            portfolio website. My next goal is to obtain my first position as a
            front-end developer and work in a team of people who share my
            passion for building beautiful, user-friendly applications!.{" "}
          </p>
        </div>
      </Carousel>
    );
  }
}

export default CarouselWrapper;
