import { ISubCard } from "../../../types/interfaces/components";

const SubCard = ({ children, width, style }: ISubCard) => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        width: width,
        ...style,
      }}>
      {children}
    </div>
  );
};

export default SubCard;
