import { ILoadingPulse } from "../types/interfaces/components";
import { PulseLoader } from "react-spinners";

const LoadingPulse = ({ color, size }: ILoadingPulse) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <PulseLoader color={color} size={size} />
    </div>
  );
};

export default LoadingPulse;
