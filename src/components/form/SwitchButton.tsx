export interface ISwitchButton {
  label: string;
  labelText?: string;
  toggled: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  ifOnText: string;
  ifOffText: string;
  type?: "submit" | "button";
}

const SwitchButton = ({
  ifOffText,
  ifOnText,
  onClick,
  toggled,
  label,
  labelText,
  type,
}: ISwitchButton) => {
  return (
    <div className="switch-holder">
      <label>{label}</label>
      <span
        className="label-text"
        style={{ color: "#17181d", fontSize: "18px" }}>
        {labelText}
      </span>
      <div className="button-holder">
        <button
          className={`toggle-btn ${toggled ? "toggled" : ""}`}
          onClick={onClick}
          type={!type ? "button" : type}>
          <div className="thumb"></div>
        </button>
        <span style={{ color: "#17181d" }} className="text">
          {toggled ? ifOnText : ifOffText}
        </span>
      </div>
    </div>
  );
};

export default SwitchButton;
