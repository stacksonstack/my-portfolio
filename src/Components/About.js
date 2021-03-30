function About() {
  return (
    <div className="about">
      <h1 className="title-text">My Coding Journey</h1>
      <p>
        {" "}
        Ruby | Rails | Javascript | React | JSON | jQuery | HTML | Bootstrap |
        CSS
      </p>
      <div className="story">
        <div id="story-container">
          <img
            id="story-image"
            src="/ProjectImages/aboutMe2.png"
            alt="school  building with laGuardia logo on the side"
          />
          <p id="story-text">
            Hello! My name is Stacey and I'm a 23 yr old, Mexican-American,
            full-stack web developer. FUN FACT: I have 3 dogs, 1 cat, and a
            turtle. If you want to learn more about my journey keep watching
            this animation, otherwise feel free to explore my website or send me
            an email by filling out the form in the contact page.
          </p>
          <img
            id="story-image2"
            src="/ProjectImages/laGuardia.png"
            alt="city buildings with flatiron school logo"
          />
          <p id="story-text2">
            I first learned how to code during my time at LaGuardia Community
            College. I began by taking free courses on Code Academy to prepare
            for my programming classes. However, it was not until I attended my
            college Web Development 101 course that I discovered my passion for
            design-driven web applications. I graduated with honors in August
            2020.
          </p>
          <img
            id="story-image3"
            src="/ProjectImages/flatironSchool.png"
            alt="students graduating"
          />
          <p id="story-text3">
            A month later, I attended Flatiron School to improve upon my
            programming skills. I worked on labs and built full-stack projects
            with talented software engineering students. I adopted the title
            CSStacey as I helped many in my cohort learn how to write modern
            CSS. Collaborating with my peers enabled me to solidify CSS concepts
            such as Flexbox, Grid, Animations, and many more. I graduated in
            January 2020.
          </p>
          <img
            id="story-image4"
            src="/ProjectImages/graduation.png"
            alt="students graduating"
          />
          <p id="story-text4">
            A month later, I attended Flatiron School to improve upon my
            programming skills. I worked on labs and built full-stack projects
            with talented software engineering students. I adopted the title
            CSStacey as I helped many in my cohort learn how to write modern
            CSS. Collaborating with my peers enabled me to solidify CSS concepts
            such as Flexbox, Grid, Animations, and many more. I graduated in
            January 2020.
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
