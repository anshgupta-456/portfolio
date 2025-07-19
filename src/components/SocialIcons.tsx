
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import "./styles/SocialIcons.css";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social");
    if (!social) return;

    const spans = Array.from(social.querySelectorAll("span"));
    const cleanupFns: (() => void)[] = [];

    spans.forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      let mouseX = 20;
      let mouseY = 20;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const rect = elem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);
      updatePosition();

      cleanupFns.push(() => {
        document.removeEventListener("mousemove", onMouseMove);
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/anshgupta-456"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/ansh-gupta-7b9a92291/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a
            href="https://www.instagram.com/_ansshhh_007/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </span>
      </div>

      <a
        className="resume-button"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
