import { ICard } from "../../../types/interfaces/components";

const Card = ({ children, style }: ICard) => {
  return (
    <div
      style={{
        marginLeft: "20px",
        marginRight: "20px",
        backgroundColor: "#fff",
        padding: "10px 30px 30px 30px",
        borderRadius: "20px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        ...style,
      }}>
      {children}
    </div>
  );
};

export default Card;
