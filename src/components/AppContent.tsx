import { IAppContainer } from "../../../types/interfaces/components";

const AppContent = ({ children }: IAppContainer) => {
  return (
    <div
      style={{
        marginBottom: "30px",
      }}>
      {children}
    </div>
  );
};

export default AppContent;
