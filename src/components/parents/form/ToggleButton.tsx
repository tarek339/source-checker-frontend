import { IToggleButton } from "../../../types/interfaces/components";

const ToggleButton = ({
  label,
  isOn,
  handleToggle,
  ifOnText,
  ifOffText,
  htmlFor,
  labelText,
}: IToggleButton) => {
  return (
    <div className="toggle-holder">
      <label>{label}</label>
      <span style={{ color: "#17181d", fontSize: "18px" }}>{labelText}</span>
      <input
        checked={isOn}
        onChange={handleToggle}
        id={htmlFor}
        className="toogle-button"
        type="checkbox"
      />
      <div className="label-holder">
        <label
          style={{ background: isOn ? "#2835c3" : "#d5d5d5" }}
          className="switch-label"
          htmlFor={htmlFor}>
          <span className="switch-button" />
        </label>
        <span style={{ color: "#17181d" }} className="text">
          {isOn ? ifOnText : ifOffText}
        </span>
      </div>
    </div>
  );
};

export default ToggleButton;
