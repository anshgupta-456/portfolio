
import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (percent >= 100) {
      setTimeout(() => {
        setLoaded(true);
        setTimeout(() => {
          setIsLoaded(true);
        }, 100);
      }, 50);
    }
  }, [percent]);

  useEffect(() => {
    if (isLoaded) {
      import("./utils/initialFX").then((module) => {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 100);
      });
    }
  }, [isLoaded, setIsLoading]);

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          ANSH GUPTA
        </a>
        <div className={`loaderGame ${clicked ? "loader-out" : ""}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>

      <div className="loading-screen">
        <div className="loading-marquee">
          <Marquee>
            <span> A Full Stack Developer </span>
            <span> A Machine Learning Engineer </span>
            <span> A Competitive Programmer </span>
            <span> A Data Scientist </span>
          </Marquee>
        </div>

        <div
          className={`loading-wrap ${clicked ? "loading-clicked" : ""}`}
          onMouseMove={handleMouseMove}
        >
          <div className="loading-hover"></div>
          <div className={`loading-button ${loaded ? "loading-complete" : ""}`}>
            <div className="loading-container">
              <div className="loading-content">
                <div className="loading-content-in">
                  Loading <span>{percent}%</span>
                </div>
              </div>
              <div className="loading-box"></div>
            </div>
            <div className="loading-content2">
              <span>Welcome</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;

// Utility function to simulate loading progression
export const setProgress = (setLoading: (value: number) => void) => {
  let percent = 0;
  let interval: ReturnType<typeof setInterval>;

  const fastInterval = setInterval(() => {
    if (percent <= 60) {
      percent += Math.round(Math.random() * 10);
      setLoading(Math.min(percent, 100));
    } else {
      clearInterval(fastInterval);
      interval = setInterval(() => {
        percent += Math.round(Math.random() * 3);
        setLoading(Math.min(percent, 100));
        if (percent > 90) {
          clearInterval(interval);
        }
      }, 200);
    }
  }, 50);

  const clear = () => {
    clearInterval(interval);
    setLoading(100);
  };

  const loaded = () => {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          clearInterval(interval);
          resolve(percent);
        }
      }, 5);
    });
  };

  return { loaded, percent, clear };
};
