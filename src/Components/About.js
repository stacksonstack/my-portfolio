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
        <div id="story-image">
          <img
            id="laguardia"
            src="/ProjectImages/laGuardia.png"
            alt="school  building with laGuardia logo on the side"
          />
          <p id="story-text">
            I first learned how to code during my time at LaGuardia Community
            College. I began by taking free courses on Code Academy to prepare
            for my programming classes. However, it was not until I attended my
            college Web Development 101 course that I discovered my passion for
            design-driven web applications. I graduated with honors in August
            2020.
          </p>
          <img
            id="story-image2"
            src="/ProjectImages/flatironSchool.png"
            alt="city buildings with flatiron school logo"
          />
          <p id="story-text2">
            A month later, I attended Flatiron School to improve upon my
            programming skills. I worked on labs and built full-stack projects
            with talented software engineering students. I adopted the title
            CSStacey as I helped many in my cohort learn how to write modern
            CSS. Collaborating with my peers enabled me to solidify CSS concepts
            such as Flexbox, Grid, Animations, and many more. I graduated in
            January 2020.
          </p>
          <img
            id="story-image3"
            src="/ProjectImages/graduation.png"
            alt="students graduating"
          />
          <p id="story-text3">
            I'm currently working to improve my skills as a Software Engineer by
            practicing algorithms on websites like Leet Code & Code Wars. I've
            also begun to refactor my passion projects which feature a Beatles
            fan site written in React. I'm also always working to improve my
            portfolio website and make it 100% mobile friendly. My next goal is to obtain my first position as a
            front-end developer and work in a team of people who share my
            passion for building beautiful, user-friendly applications!{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default About;
