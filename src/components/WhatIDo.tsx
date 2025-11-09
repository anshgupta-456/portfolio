import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

type CardRefs = {
  container: HTMLDivElement | null;
  inner: HTMLDivElement | null;
};

const Achievements = () => {
  const cardsRef = useRef<CardRefs[]>([]);

  const setContainerRef = (el: HTMLDivElement | null, index: number) => {
    if (!cardsRef.current[index]) cardsRef.current[index] = { container: null, inner: null };
    cardsRef.current[index].container = el;
  };
  const setInnerRef = (el: HTMLDivElement | null, index: number) => {
    if (!cardsRef.current[index]) cardsRef.current[index] = { container: null, inner: null };
    cardsRef.current[index].inner = el;
  };

  const setExpandedHeight = (index: number) => {
    const inner = cardsRef.current[index]?.inner;
    const container = cardsRef.current[index]?.container;
    if (!inner || !container) return;
    // measure actual content height
    const h = inner.scrollHeight;
    container.style.setProperty("--expanded-height", `${h}px`);
  };

  const activate = (index: number) => {
    const container = cardsRef.current[index]?.container;
    if (!container) return;
    // measure before activating so the transition knows the target height
    setExpandedHeight(index);
    // clear others + set siblings
    const parent = container.parentElement;
    if (!parent) return;
    Array.from(parent.children).forEach((el) => {
      el.classList.remove("what-content-active", "what-sibling");
    });
    container.classList.add("what-content-active");
    Array.from(parent.children).forEach((el) => {
      if (el !== container) el.classList.add("what-sibling");
    });
  };

  const deactivateAll = (index?: number) => {
    const parent =
      index != null
        ? cardsRef.current[index]?.container?.parentElement
        : cardsRef.current[0]?.container?.parentElement;
    if (!parent) return;
    Array.from(parent.children).forEach((el) => {
      el.classList.remove("what-content-active", "what-sibling");
      // optional: clear expanded height
      (el as HTMLElement).style.removeProperty("--expanded-height");
    });
  };

  useEffect(() => {
    // TOUCH: tap to toggle; DESKTOP: hover handled via props below
    if (ScrollTrigger.isTouch) {
      const handlers: Array<{ el: HTMLDivElement; fn: () => void }> = [];
      cardsRef.current.forEach((refs, i) => {
        const el = refs.container;
        if (!el) return;
        el.classList.remove("what-noTouch");
        const fn = () => {
          const isActive = el.classList.contains("what-content-active");
          deactivateAll(i);
          if (!isActive) activate(i);
        };
        el.addEventListener("click", fn);
        handlers.push({ el, fn });
      });
      return () => handlers.forEach(({ el, fn }) => el.removeEventListener("click", fn));
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
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {/* 1 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setContainerRef(el, 0)}
            onMouseEnter={() => !ScrollTrigger.isTouch && activate(0)}
            onFocus={() => !ScrollTrigger.isTouch && activate(0)}
            onMouseLeave={() => !ScrollTrigger.isTouch && deactivateAll(0)}
            onBlur={() => !ScrollTrigger.isTouch && deactivateAll(0)}
            tabIndex={0}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in" ref={(el) => setInnerRef(el, 0)}>
              <h3>Hackathon Wins</h3>
              <h4>Innovation & Coding Excellence</h4>
              <p className="what-preview">
                Secured top positions in multiple national-level hackathons and innovation challenges. Recognized for
                creative problem-solving, technical depth, and teamwork.
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

          {/* 2 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setContainerRef(el, 1)}
            onMouseEnter={() => !ScrollTrigger.isTouch && activate(1)}
            onFocus={() => !ScrollTrigger.isTouch && activate(1)}
            onMouseLeave={() => !ScrollTrigger.isTouch && deactivateAll(1)}
            onBlur={() => !ScrollTrigger.isTouch && deactivateAll(1)}
            tabIndex={0}
          >
            <div className="what-border1">
              <svg height="100%">
                <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in" ref={(el) => setInnerRef(el, 1)}>
              <h3>Research & Certifications</h3>
              <h4>Academic and Technical Growth</h4>
              <p className="what-preview">
                Demonstrated strong research aptitude through contributions in AI and computational biology. Gained
                certifications that strengthen technical and analytical skills.
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
