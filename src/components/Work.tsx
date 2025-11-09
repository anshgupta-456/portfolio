
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
    const box = document.getElementsByClassName("work-box");
    const boxWidth = box[0]?.getBoundingClientRect().width || 0;
    const boxCount = box.length;
    const totalWidth = boxWidth * boxCount;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${totalWidth}`,
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(flexRef.current, {
      x: -totalWidth + window.innerWidth,
      ease: "none",
    });
  }, []);

  const projects = [
  {
    title: "PeerFit – AI-based Fitness Assistant",
    category: "Computer Vision + Web",
    tools: "Pose detection/classification, Python, Web UI",
    desc: "Improved an AI-powered fitness assistant using pose detection and classification to provide real-time exercise feedback and posture correction. Added support for multiple exercises with clear, user-friendly feedback delivered through a web interface. (June 2025)"
  },
  {
    title: "Air Quality Prediction (Research Paper Replication)",
    category: "Machine Learning",
    tools: "Python, EDA, Regression models",
    desc: "Replicated a study predicting AQI across Indian cities. Performed data preprocessing and exploratory data analysis, trained/evaluated regression models, and visualized key pollution trends to assess generalization and robustness. (Jan–Apr 2025)"
  },
  {
    title: "Grievance Management System",
    category: "Full Stack + Speech",
    tools: "Web app, Voice-to-Text (4 languages), Real-time tracking",
    desc: "Enhanced a campus grievance portal where students lodge complaints via multilingual voice-to-text. Implemented real-time ticket tracking so users can monitor progress from submission to resolution. (Mar–Apr 2025)"
  },
  {
    title: "Molecule Optimizer with ECFP6 & GROVER Fingerprints",
    category: "ML for Drug Discovery",
    tools: "ECFP6, GROVER, Hyperparameter tuning, Feature selection",
    desc: "Built models to predict molecular activity and optimize compounds across 19 models using ECFP6 and GROVER fingerprints. Applied hyperparameter tuning and feature selection to improve predictive accuracy for protein/gene activity; leveraged MIMOSA and GenAI frameworks. (IIIT-Delhi, Jun–Aug 2025)"
  },
  {
    title: "Protein–Protein Interaction ML Pipeline",
    category: "Bioinformatics + ML",
    tools: "Dataset curation, Preprocessing, Model training",
    desc: "Curated and preprocessed multi-species PPI datasets (1M+ datapoints) to train robust ML models. Focused on data quality/integrity to boost downstream accuracy for interaction prediction. (IIIT-Delhi, Jun–Aug 2025)"
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

      {/* ✅ Spacer to prevent overlap with TechStack */}
      <div style={{ height: "6vh" }}></div>
    </>
  );
};

export default Work;