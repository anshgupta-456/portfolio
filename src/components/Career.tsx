import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Intern - Computational Biology</h4>
                <h5>IIIT Delhi</h5>
              </div>
              <h3>May 2025 - August 2025</h3>
            </div>
            <p>
              Worked under Prof. Gaurav Ahuja in the Department of Computational Biology on machine learning models for molecule optimization and protein–protein interaction prediction. Developed ML pipelines using ECFP6 and GROVER molecular fingerprints to predict biological activity and improve compound optimization accuracy.
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Career;
