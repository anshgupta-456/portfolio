import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css"; // Keep same CSS, works perfectly
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Achievements = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          A<span className="hat-h2">CHIEVE</span>
          <div>
            M<span className="do-h2">ENTS</span>
          </div>
        </h2>
      </div>

      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* --- First Achievement --- */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>

            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>Hackathon Wins</h3>
              <h4>Innovation & Coding Excellence</h4>
              <p>
                Secured top positions in multiple national-level hackathons and innovation challenges.
                Recognized for creative problem-solving, technical depth, and teamwork.
              </p>
              <h5>Highlights</h5>
              <div className="what-content-flex">
                <div className="what-tags">🥇 Top 10 – IIT Delhi Blueprint</div>
                <div className="what-tags">🥈 2nd – DTU Code or Die</div>
                <div className="what-tags">🥈 2nd – Masters’ Union Startup Spotlight</div>
                <div className="what-tags">🥉 3rd – TrishulX Sankalp 101</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* --- Second Achievement --- */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>Research & Certifications</h3>
              <h4>Academic and Technical Growth</h4>
              <p>
                Demonstrated strong research aptitude through contributions in AI and computational biology.
                Gained certifications that strengthen technical and analytical skills.
              </p>
              <h5>Highlights</h5>
              <div className="what-content-flex">
                <div className="what-tags">🎓 Research Intern – IIIT Delhi</div>
                <div className="what-tags">📜 AWS Cloud Camper</div>
                <div className="what-tags">📜 Postman API Expert</div>
                <div className="what-tags">📜 NPTEL Java Certification</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
