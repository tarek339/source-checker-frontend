import { useEffect } from "react";
import { Rating } from "react-simple-star-rating";
import {
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import Flex from "../../parents/containers/Flex";
import ContButton from "../../buttons/ContButton";
import axios from "axios";
import { IStarRating } from "../../../types/interfaces/components";

const StarRating = ({ surveyId, pageId, studentId }: IStarRating) => {
  const { t } = useTranslations();
  const { dispatchSurvey, setVoted, setVotedStars, setStars } = useDispatches();
  const { student, surveyPages, voted, votedStars, stars, currentPage } =
    useSelectors();
  const { fetchSurvey } = useRequests();

  const handleRating = (star: number) => {
    setStars(star);
  };

  const handleSubmit = async () => {
    const res = await axios.post(`/survey/push-stars/${surveyId}`, {
      pageId,
      stars,
      studentId,
    });
    dispatchSurvey(res.data.survey);
    fetchSurvey();
  };

  useEffect(() => {
    surveyPages.slice(currentPage - 1, currentPage).map((sp) => {
      return sp.starsArray.filter((sa) => {
        return setVoted(sa.studentId === student?._id!);
      });
    });
    surveyPages.slice(currentPage - 1, currentPage).forEach((sp) => {
      const foundId = sp.starsArray.find((sa) => {
        return sa.studentId === student?._id;
      });
      if (foundId) {
        setVotedStars(foundId.stars);
      }
    });
  }, [student, surveyPages, voted, votedStars, currentPage]);

  useEffect(() => {
    surveyPages.slice(currentPage - 1, currentPage).map((page) => {
      const findObj = page.starsArray.find((obj) => {
        return obj;
      });
      if (!findObj) {
        setVotedStars(0);
        setVoted(false);
      }
    });
  }, [surveyPages, currentPage, stars, voted, votedStars]);
  return (
    <Flex direction={"row"} gap={"20px"} align="center">
      <>
        <Rating
          className="react-simple-star-rating"
          initialValue={!voted ? stars : votedStars}
          onClick={handleRating}
          showTooltip={true}
          tooltipStyle={{ marginLeft: "10px" }}
          SVGstyle={{ paddingTop: "7px" }}
          size={50}
          tooltipDefaultText={t("studentSurvey.ratingTitle")}
          tooltipArray={[
            "unglaubwürdig",
            "zweifelhaft",
            "fragwürdig",
            "vertrauenswürdig",
            "glaubwürdig",
          ]}
          disableFillHover={voted ? true : false}
          readonly={voted ? true : false}
          allowHover={voted ? false : true}
        />
        {stars > 0 && !voted ? (
          <ContButton onClick={handleSubmit} title={t("input.button")} />
        ) : null}
      </>
    </Flex>
  );
};

export default StarRating;
