import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        {/* Intro Name */}
        <div className="landing-intro">
          <h2>Hello! I'm</h2>
          <h1>
            ANSH
            <br />
            <span>GUPTA</span>
          </h1>
        </div>

        {/* Tagline and Roles */}
        <div className="landing-info">
          <h3>A Passionate</h3>

          <div className="landing-info-h2">
            <h2 className="landing-h2-1">ML Engineer</h2>
            <h2 className="landing-h2-2">Full Stack Dev</h2>
          </div>

          <div className="landing-h2-group">
            <h2 className="landing-h2-info">AI Enthusiast</h2>
            <h2 className="landing-h2-info-1">Problem Solver</h2>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default Landing;
