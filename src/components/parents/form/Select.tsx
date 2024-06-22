import { useState } from "react";
import { ISelect } from "../../../types/interfaces/components";
import Flex from "../containers/Flex";

const Select = ({ label, error, inputErrorStyle, options, width }: ISelect) => {
  const [isActive, setIsActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | JSX.Element>();

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
            width: `${width}px`,
            borderColor: inputErrorStyle ? "#f44336" : "",
            boxShadow: inputErrorStyle ? "0px 0px 0px 1px #f44336 inset" : "",
          }}>
          <div
            style={{ color: inputErrorStyle ? "#f44336" : "" }}
            className="textBox">
            {selectedItem}
          </div>
          <div className="option">
            {options?.map((opt, i) => {
              return (
                <div
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={i}>
                  <div
                    style={{
                      padding: "5px",
                      width: "100%",
                      backgroundColor: hoveredIndex === i ? "#2835c3" : "#fff",
                      color: hoveredIndex === i ? "#fff" : "",
                    }}
                    onClick={() => setSelectedItem(opt)}>
                    {opt}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {error}
      </>
    </Flex>
  );
};

export default Select;
