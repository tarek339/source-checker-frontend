import { useEffect, useState } from "react";
import { ISelect } from "../../../types/interfaces/components";

const Select = ({
  label,
  error,
  inputErrorStyle,
  option,
  selectedItem,
}: ISelect) => {
  const [isActive, setIsActive] = useState(false);

  const handleDropdownClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    console.log(isActive);
  }, [isActive]);

  return (
    <div className="input-holder">
      <label htmlFor="">{label}</label>
      <div
        className={`select ${isActive ? "active" : ""}`}
        onClick={handleDropdownClick}
        style={{
          borderColor: inputErrorStyle ? "#f44336" : "",
          boxShadow: inputErrorStyle ? "0px 0px 0px 1px #f44336 inset" : "",
        }}>
        <div
          style={{ color: inputErrorStyle ? "#f44336" : "" }}
          className="textBox">
          {selectedItem}
        </div>
        <div className="option">{option}</div>
      </div>
      {error}
    </div>
  );
};

export default Select;
