import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/all";

const Achievements = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  // Helpers to activate/deactivate one card and mark siblings
  const activate = (index: number) => {
    const target = containerRef.current[index];
    if (!target || !target.parentElement) return;
    for (const el of Array.from(target.parentElement.children)) {
      el.classList.remove("what-content-active", "what-sibling");
    }
    target.classList.add("what-content-active");
    for (const el of Array.from(target.parentElement.children)) {
      if (el !== target) el.classList.add("what-sibling");
    }
  };

  const deactivateAll = (index?: number) => {
    const parent = index != null ? containerRef.current[index]?.parentElement : containerRef.current[0]?.parentElement;
    if (!parent) return;
    for (const el of Array.from(parent.children)) {
      el.classList.remove("what-content-active", "what-sibling");
    }
  };

  useEffect(() => {
    // TOUCH: tap to toggle the active state (no hover on touch)
    if (ScrollTrigger.isTouch) {
      const clickHandlers: Array<{ el: HTMLDivElement; fn: (e: Event) => void }> = [];

      containerRef.current.forEach((el, i) => {
        if (!el) return;
        el.classList.remove("what-noTouch");
        const fn = () => {
          // toggle current, clear siblings
          const isActive = el.classList.contains("what-content-active");
          deactivateAll(i);
          if (!isActive) activate(i);
        };
        el.addEventListener("click", fn);
        clickHandlers.push({ el, fn });
      });

      return () => {
        clickHandlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
      };
    }
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
          {/* borders kept as-is */}
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* --- First Achievement --- */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
            // DESKTOP: show content on hover/focus
            onMouseEnter={() => !ScrollTrigger.isTouch && activate(0)}
            onMouseLeave={() => !ScrollTrigger.isTouch && deactivateAll(0)}
            onFocus={() => !ScrollTrigger.isTouch && activate(0)}
            onBlur={() => !ScrollTrigger.isTouch && deactivateAll(0)}
            tabIndex={0} // keyboard focusable for accessibility
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
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
            onMouseEnter={() => !ScrollTrigger.isTouch && activate(1)}
            onMouseLeave={() => !ScrollTrigger.isTouch && deactivateAll(1)}
            onFocus={() => !ScrollTrigger.isTouch && activate(1)}
            onBlur={() => !ScrollTrigger.isTouch && deactivateAll(1)}
            tabIndex={0}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
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
