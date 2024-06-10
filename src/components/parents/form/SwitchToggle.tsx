import { ISwitchToggle } from "../../../types/interfaces/components";

const SwitchToggle = ({
  label,
  checked,
  onChange,
  ifOnText,
  ifOffText,
  labelText,
  htmlFor,
}: ISwitchToggle) => {
  return (
    <div className="toggle-holder">
      <label>{label}</label>
      <span style={{ color: "#17181d", fontSize: "18px" }}>{labelText}</span>
      <input
        checked={checked}
        onChange={onChange}
        id={htmlFor}
        className="toogle-button"
        type="checkbox"
      />
      <div className="label-holder">
        <label
          style={{ background: checked ? "#2835c3" : "#d5d5d5" }}
          className="switch-label"
          htmlFor={htmlFor}>
          <span className="switch-button" />
        </label>
        <span style={{ color: "#17181d" }} className="text">
          {checked ? ifOnText : ifOffText}
        </span>
      </div>
    </div>
  );
};

export default SwitchToggle;
