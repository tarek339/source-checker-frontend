import { FaCheck } from "react-icons/fa";

const Check = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(49, 233, 129, 0.5)",
        padding: "8px",
        borderRadius: "50px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(49, 233, 129)",
          borderRadius: "50px",
          padding: "3px",
        }}>
        <FaCheck color="#2834c2" fontSize="20px" />
      </div>
    </div>
  );
};

export default Check;
