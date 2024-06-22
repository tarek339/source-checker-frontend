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
import { useState } from "react";

const StarRating = ({ surveyId, pageId, studentId }: IStarRating) => {
  const { t } = useTranslations();
  const { dispatchSurvey, setStars, setVoted, setVotedStars } = useDispatches();
  const { voted, votedStars, stars } = useSelectors();
  const { fetchSurvey } = useRequests();
  const [showToolTip, setShowToolTip] = useState(false);

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

  const onPointerMove = (value: number) => {
    console.log(value);
    value === 2 || value === 3 || value === 4
      ? setShowToolTip(false)
      : setShowToolTip(true);
  };
  const onPointerLeave = () => setShowToolTip(false);

  return (
    <Flex direction={"row"} gap={"20px"} align="center">
      <>
        <Rating
          className="react-simple-star-rating"
          initialValue={!voted ? stars : votedStars}
          onClick={handleRating}
          SVGstyle={{ paddingTop: "7px" }}
          size={50}
          tooltipArray={[
            t("studentSurvey.rating.unbelievable"),
            "",
            "",
            "",
            t("studentSurvey.rating.credible"),
          ]}
          tooltipStyle={{ marginLeft: "10px" }}
          showTooltip={showToolTip}
          disableFillHover={voted ? true : false}
          readonly={voted ? true : false}
          allowHover={voted ? false : true}
          transition={true}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        />
        {stars > 0 && !voted ? (
          <ContButton onClick={handleSubmit} title={t("button.submit")} />
        ) : null}
      </>
    </Flex>
  );
};

export default StarRating;
