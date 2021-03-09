function About() {
  return (
    <div className="about">
      <h1 className="title-text">My Coding Journey</h1>
      <p> Ruby | Rails | Javascript | React | JSON | jQuery | HTML | Bootstrap | CSS</p>
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
            for my Intro to Computer Science which taught the basics of C++ and
            Computer Science concepts.
          </p>
          <img 
          id="story-image2"
            src="/ProjectImages/flatironSchool.png"
            alt="city buildings with flatiron school logo"
          />
          <p id="story-text2">After graduating LaGuardia I attended Flatiron School</p>
          <img 
          id="story-image3"
            src="/ProjectImages/graduation.png"
            alt="students graduating"
          />
          <p id="story-text3">I'm currently working to improve my skills as a front end developer by practicing algorithms on websites like Leet Code.
          I've also began to refactor past projects and plan to build a beatles fan site in React. </p>
        </div>
         
    </div>
    </div>
  );
}
export default About;
