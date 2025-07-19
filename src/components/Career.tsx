import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My Career <span>&</span>
          <br /> Experience
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Career Entry 1 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern</h4>
                <h5>IIIT Delhi</h5>
              </div>
              <h3>2025 – Present</h3>
            </div>
            <p>
              Conducting machine learning research with a focus on supervised, unsupervised, and ensemble techniques. 
              Built and evaluated multiple ML models to improve performance across predictive tasks.
            </p>
          </div>

          {/* Career Entry 2 */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Open Source Contributor</h4>
                <h5>GirlScript Summer of Code</h5>
              </div>
              <h3>Oct – Nov 2024</h3>
            </div>
            <p>
              Contributed to multiple open-source projects by enhancing features, fixing bugs, and improving documentation. 
              Collaborated with global contributors while following good Git practices.
            </p>
          </div>

          {/* Optional Freelance/Consultant Entry */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Developer</h4>
                <h5>Independent</h5>
              </div>
              <h3>Ongoing</h3>
            </div>
            <p>
              Working on AI-enabled web applications and college-level platforms. 
              Built and deployed end-to-end systems with voice-to-text features and real-time feedback using ML and React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
