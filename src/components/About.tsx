import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>

        <p className="para">
          I’m <span className="highlight">Ansh Gupta</span>, a
          <span className="highlight"> B.Tech student</span> in
          <span className="highlight"> Electronics and Communication Engineering</span> with a
          <span className="highlight"> minor in AI/ML</span> at the
          <span className="highlight"> University of Delhi</span>. I’m passionate about
          <span className="highlight"> machine learning</span> and
          <span className="highlight"> generative AI</span> to drive real-world innovation.
        </p>

        <p className="para">
          As a <span className="highlight">Research Intern at IIIT Delhi</span>, I built ML models for
          <span className="highlight"> molecule optimization</span> and
          <span className="highlight"> protein–protein interaction prediction</span> using
          <span className="highlight"> ECFP6</span> and <span className="highlight">GROVER</span> fingerprints.
        </p>

        <p className="para">
          I combine <span className="highlight">research</span>, 
          <span className="highlight"> leadership</span>, and
          <span className="highlight"> problem-solving skills</span> to create 
          <span className="highlight"> intelligent, human-centered AI solutions</span>
        </p>
      </div>
    </div>
  );
};

export default About;
