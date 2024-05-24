import { useEffect, useState } from "react";
import { Loading } from "./icons";
import { ILoadingSpinner } from "../types/interfaces/components";

const LoadingSpinner = ({ fontSize, color, height }: ILoadingSpinner) => {
  const [rotation, setRotation] = useState(0);
  const [loading, _setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const interval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 5);
      }, 12);
      return () => clearInterval(interval);
    }
  }, [loading]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: height,
      }}>
      <Loading
        style={{
          fontSize: fontSize,
          color: color,
          transform: `rotate(${rotation}deg)`,
        }}
      />
    </div>
  );
};

export default LoadingSpinner;
