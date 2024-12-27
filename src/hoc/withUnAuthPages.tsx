import { useDispatches, useSelectors } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ComponentType } from "react";

const withUnAuthPages = (Component: ComponentType) => {
  return (props: JSX.IntrinsicAttributes) => {
    const { survey, surveyLoading, student, studenLoading } = useSelectors();
    const { setMainPage } = useDispatches();
    const navigate = useNavigate();

    useEffect(() => {
      const surveyId = survey?._id;
      if (survey && !surveyLoading && !student && !studenLoading) {
        setMainPage(false);
        return navigate(`/surveys-manager/survey-profile/${survey._id}`);
      }
      if (student && !studenLoading && survey && !surveyLoading) {
        setMainPage(false);
        return navigate(
          `/student-survey/${surveyId}/student-id/${student._id}`
        );
      }
    }, [navigate, studenLoading, student, survey, surveyLoading]);

    return <Component {...props} />;
  };
};

export default withUnAuthPages;
