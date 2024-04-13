import { ISteps } from "../../types/interfaces/components";

const Steps = ({ counter, text, style }: ISteps) => {
  return (
    <div className="steps-description">
      <span style={style}>{counter}</span>
      <span>{text}</span>
    </div>
  );
};

export default Steps;
