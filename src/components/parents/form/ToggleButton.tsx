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
      <span>{labelText}</span>
      <input
        checked={isOn}
        onChange={handleToggle}
        id={htmlFor}
        className="toogle-button"
        type="checkbox"
      />
      <div className="label-holder">
        <label
          style={{ background: isOn ? "#2835c3" : "lightgrey" }}
          className="switch-label"
          htmlFor={htmlFor}>
          <span className="switch-button" />
        </label>
        <span className="text">{isOn ? ifOnText : ifOffText}</span>
      </div>
    </div>
  );
};

export default ToggleButton;
