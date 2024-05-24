import { ISteps } from "../../types/interfaces/components";

const Steps = ({ counter, text, style }: ISteps) => {
  return (
    <div className="steps-description">
      <span style={{ fontWeight: 600, fontSize: "20px", ...style }}>
        {counter}
      </span>
      <span>{text}</span>
    </div>
  );
};

export default Steps;
