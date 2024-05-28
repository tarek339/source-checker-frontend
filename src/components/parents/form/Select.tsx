import { useState } from "react";
import { ISelect } from "../../../types/interfaces/components";
import Flex from "../containers/Flex";

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

  return (
    <Flex direction={"column"} gap={"3px"}>
      <>
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
      </>
    </Flex>
  );
};

export default Select;
