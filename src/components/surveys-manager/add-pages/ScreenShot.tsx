import { IScreenShot } from "../../../types/interfaces/components";
import ChooseButton from "../../buttons/ChooseButton";

const ScreenShot = ({ title, width }: IScreenShot) => {
  return (
    <div>
      <h4>{title}</h4>
      <div
        id="capture"
        style={{
          width: width,
          height: "100%",
          border: "1px solid grey",
          marginBottom: "10px",
        }}></div>
      <ChooseButton onClick={undefined} />
    </div>
  );
};

export default ScreenShot;
