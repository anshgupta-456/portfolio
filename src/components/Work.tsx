
import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
      title: "Smart Patient Health Monitoring System",
      category: "IoT + Web App",
      tools: "NodeMCU, C++, Sensors, HTML, CSS, JS, Node.js, MongoDB",
      desc: "Designed a real-time IoT-based health monitoring system using NodeMCU and biomedical sensors (temperature, pulse, motion). Patients' vitals were collected and transmitted wirelessly to a web interface for doctors and caretakers. Alert system triggered warnings when vitals crossed critical thresholds, improving emergency responsiveness and remote care efficiency."
    },
    {
      title: "Voice-Powered Virtual Assistant",
      category: "AI + NLP",
      tools: "Python, SpeechRecognition, pyttsx3, Google APIs",
      desc: "Built a personal AI assistant capable of executing voice-activated tasks such as opening applications, retrieving web data, sending emails, and answering user queries. Integrated NLP for command interpretation and used Google APIs for weather, search, and translation services. The assistant supported voice feedback and multi-command handling, enhancing productivity and accessibility."
    },
    {
      title: "Portfolio Website with 3D Tech Stack",
      category: "Frontend + 3D Animation",
      tools: "React.js, TypeScript, Three.js, GSAP",
      desc: "Developed an interactive personal portfolio with smooth animations and a 3D floating tech stack using Three.js. Implemented scroll-synced animations via GSAP and integrated sections for bio, skills, career, and contact. Used lazy loading and dynamic imports to optimize performance across desktop and mobile. Enhanced professional visibility and brand presence online."
    },
    {
      title: "Food Review App",
      category: "Full Stack",
      tools: "React, Firebase, Material UI",
      desc: "Created a real-time food review application enabling users to post and browse reviews on restaurants and dishes. Integrated Firebase Authentication for secure login/signup, Firestore for real-time data storage, and Material UI for a responsive design. Encouraged community-based food discovery and promoted local eateries."
    },
    {
      title: "Gesture Controlled Virtual Mouse",
      category: "Computer Vision + Human-Computer Interaction",
      tools: "OpenCV, MediaPipe, Python",
      desc: "Engineered a gesture recognition system using a webcam to control mouse movements and clicks through hand gestures. Leveraged MediaPipe for hand tracking and OpenCV for gesture interpretation. Enabled users to perform basic system navigation without physical peripherals—offering a touchless interface useful in accessibility and hygiene-critical environments."
    },
    {
      title: "E-Commerce Website with Razorpay",
      category: "Full Stack + Payments",
      tools: "MERN Stack (MongoDB, Express, React, Node.js), Razorpay API",
      desc: "Built a feature-rich e-commerce website with product listing, cart, order management, and secure payment gateway integration using Razorpay. Backend included JWT-based user auth, MongoDB product catalog, and dynamic order routing. The platform supported user registration, checkout flow, and admin dashboard for inventory management."
    },
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
      <div style={{ height: "0.5vh" }}></div>
    </>
  );
};

export default Work;
