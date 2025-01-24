import { useEffect, useState } from "react";

const useBreakPoints = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windoHeight, setWindoHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    const handleResizeHeight = () => {
      setWindoHeight(window.innerHeight);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeHeight);
    };
  }, []);

  return { windowWidth, windoHeight };
};

export default useBreakPoints;
