import { MoonLoader } from "react-spinners";
import { LoadingSpinnerProps } from "../types/interfaces/components";

const LoadingSpinner = ({ size, color }: LoadingSpinnerProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <MoonLoader speedMultiplier={0.8} color={color} size={size} />
    </div>
  );
};

export default LoadingSpinner;
