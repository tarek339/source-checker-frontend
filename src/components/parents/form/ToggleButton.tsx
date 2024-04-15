export interface IToggleButton {
  label: string;
  isOn: boolean;
  handleToggle: React.ChangeEventHandler<HTMLInputElement> | undefined;
  ifOnText: string;
  ifOffText: string;
}

const ToggleButton = ({
  label,
  isOn,
  handleToggle,
  ifOnText,
  ifOffText,
}: IToggleButton) => {
  return (
    <div className="toggle-holder">
      <label>{label}</label>
      <input
        checked={isOn}
        onChange={handleToggle}
        id="switch"
        className="toogle-button"
        type="checkbox"
      />
      <div className="label-holder">
        <label
          style={{ background: isOn ? "#16a34a" : "lightgrey" }}
          className="switch-label"
          htmlFor="switch">
          <span className="switch-button" />
        </label>
        <span className="text">{isOn ? ifOnText : ifOffText}</span>
      </div>
    </div>
  );
};

export default ToggleButton;
