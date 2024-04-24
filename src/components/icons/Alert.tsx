import { IoAlertSharp } from "react-icons/io5";

const Alert = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(244, 67, 54, 0.5)",
        padding: "8px",
        borderRadius: "50px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgb(244, 67, 54)",
          borderRadius: "50px",
          padding: "3px",
        }}>
        <IoAlertSharp
          style={{
            color: "#fff",
            fontSize: "20px",
          }}
        />
      </div>
    </div>
  );
};

export default Alert;
