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
        </div>
          <div id="story-image2">
          <img 
            src="/ProjectImages/flatironSchool.png"
            alt="school  building with laGuardia logo on the side"
          />
          <p className="story-text2">After graduating LaGuardia I attended Flatiron School</p>
          </div>
    </div>
    </div>
  );
}
export default About;
