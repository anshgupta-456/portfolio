import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const flexRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Prevent mobile scroll jumps when address bar shows/hides
    ScrollTrigger.config({ ignoreMobileResize: true });

    const mm = gsap.matchMedia();

    /* -------------------------------------------
       ✅ DESKTOP (≥ 1024px) — Pinned horizontal
    -------------------------------------------- */
    mm.add("(min-width: 1024px)", () => {
      const getTotalWidth = () => {
        const boxes = document.getElementsByClassName("work-box");
        const w = boxes[0]?.getBoundingClientRect().width || 0;
        return w * boxes.length;
      };

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${getTotalWidth()}`,
          scrub: true,
          pin: true,
          pinSpacing: true,
          pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
          invalidateOnRefresh: true,
          id: "work",
        },
      });

      tl.to(flexRef.current, {
        x: () => -(getTotalWidth() - window.innerWidth),
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    });

    /* -------------------------------------------
       ✅ MOBILE / TABLET (< 1024px)
       → No pinning, no transform, natural scroll
    -------------------------------------------- */
    mm.add("(max-width: 1023px)", () => {
      gsap.set(flexRef.current, { clearProps: "transform" });
      return () => {};
    });

    return () => mm.revert();
  }, []);

  const projects = [
    {
      title: "PeerFit – AI-based Fitness Assistant",
      category: "Computer Vision + Web",
      tools: "Pose detection/classification, Python, Web UI",
      desc: "Improved an AI-powered fitness assistant using pose detection and classification to provide real-time exercise feedback and posture correction. Added multiple exercises and web-based feedback. (June 2025)"
    },
    {
      title: "Air Quality Prediction (Research Paper Replication)",
      category: "Machine Learning",
      tools: "Python, EDA, Regression models",
      desc: "Replicated an AQI prediction study. Performed EDA, trained regression models, visualized pollution trends, and validated generalization. (Jan–Apr 2025)"
    },
    {
      title: "Grievance Management System",
      category: "Full Stack + Speech",
      tools: "Web app, Voice-to-Text (4 languages), Real-time tracking",
      desc: "Enhanced a multilingual grievance portal with voice-to-text and real-time ticket tracking from submission to resolution. (Mar–Apr 2025)"
    },
    {
      title: "Molecule Optimizer with ECFP6 & GROVER Fingerprints",
      category: "ML for Drug Discovery",
      tools: "ECFP6, GROVER, Hyperparameter tuning",
      desc: "Optimized molecular activities across 19 ML models using ECFP6 and GROVER fingerprints. Applied MIMOSA + GenAI-based improvements. (IIIT-Delhi, Jun–Aug 2025)"
    },
    {
      title: "Protein–Protein Interaction ML Pipeline",
      category: "Bioinformatics + ML",
      tools: "Dataset curation, Preprocessing, Model training",
      desc: "Curated and preprocessed 1M+ PPI dataset entries to train robust PPI prediction models. Improved dataset quality and downstream accuracy. (IIIT-Delhi, Jun–Aug 2025)"
    }
  ];

  return (
    <>
      <div className="work-section" id="work" ref={sectionRef}>
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>

          <div className="work-flex" ref={flexRef}>
            {projects.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>
                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.category}</p>
                    </div>
                  </div>

                  <h4>Tools & Technologies</h4>
                  <p>{project.tools}</p>

                  <h4>Description</h4>
                  <p>{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop spacer (hidden on mobile via CSS) */}
      <div className="work-spacer"></div>
    </>
  );
};

export default Work;
