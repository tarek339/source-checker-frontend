import { useSelectors } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ComponentType } from "react";

const withStudentAuthPages = (Component: ComponentType) => {
  return (props: JSX.IntrinsicAttributes) => {
    const { student, studenLoading } = useSelectors();
    const navigate = useNavigate();

    useEffect(() => {
      if (!student && !studenLoading) {
        return navigate("/");
      }
    }, [navigate, studenLoading, student]);

    if (studenLoading) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withStudentAuthPages;
