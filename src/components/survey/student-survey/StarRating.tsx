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
  const { dispatchSurvey, setStars, setVoted, setVotedStars } = useDispatches();
  const { voted, votedStars, stars } = useSelectors();
  const { fetchSurvey } = useRequests();

  const handleRating = (star: number) => {
    setStars(star);
    setVotedStars(star);
  };

  const handleSubmit = async () => {
    setVoted(true);
    const res = await axios.post(`/survey/push-stars/${surveyId}`, {
      pageId,
      stars,
      studentId,
    });
    dispatchSurvey(res.data.survey);
    fetchSurvey();
  };

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
          tooltipDefaultText={t("studentSurvey.rating.ratingTitle")}
          tooltipArray={[
            t("studentSurvey.rating.unbelievable"),
            t("studentSurvey.rating.doubtful"),
            t("studentSurvey.rating.questionable"),
            t("studentSurvey.rating.trustworthy"),
            t("studentSurvey.rating.credible"),
          ]}
          disableFillHover={voted ? true : false}
          readonly={voted ? true : false}
          allowHover={voted ? false : true}
        />
        {stars > 0 && !voted ? (
          <ContButton onClick={handleSubmit} title={t("button.submit")} />
        ) : null}
      </>
    </Flex>
  );
};

export default StarRating;
