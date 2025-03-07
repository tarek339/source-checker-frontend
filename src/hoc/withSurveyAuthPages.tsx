import { useSelectors } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ComponentType } from "react";
import { JSX } from "react";

const withSurveyAuthPages = (Component: ComponentType) => {
  return (props: JSX.IntrinsicAttributes) => {
    const { survey, surveyLoading } = useSelectors();
    const navigate = useNavigate();

    useEffect(() => {
      if (!survey && !surveyLoading) {
        return navigate("/surveys-manager/log-in");
      }
    }, [navigate, survey, surveyLoading]);

    if (surveyLoading) {
      return null;
    }

    return <Component {...props} />;
  };
};

export default withSurveyAuthPages;
