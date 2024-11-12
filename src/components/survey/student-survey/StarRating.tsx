import { Rating } from "react-simple-star-rating";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import axios from "axios";
import { IStarRating } from "../../../types/interfaces/components";
import { useEffect, useRef, useState } from "react";
import Flex from "../../containers/Flex";
import WaitMessage from "./WaitMessage";
import { Button } from "../..";

const StarRating = ({ surveyId, pageId, studentId }: IStarRating) => {
  const { t } = useTranslations();

  const {
    dispatchSurvey,
    setStars,
    setVoted,
    setVotedStars,
    openModal,
    closeModal,
  } = useDispatches();
  const { voted, votedStars, stars, modal, currentPage } = useSelectors();
  const { fetchSurvey } = useRequests();
  const { windowWidth } = useBreakPoints();
  const prevPageRef = useRef(currentPage);
  const [_showToolTip, setShowToolTip] = useState(false);

  const handleRating = (star: number) => {
    setStars(star);
    setVotedStars(star);
  };

  const handleSubmit = async () => {
    setVoted(true);
    openModal();
    const res = await axios.post(`/survey/push-stars/${surveyId}`, {
      pageId,
      stars,
      studentId,
    });
    dispatchSurvey(res.data.survey);
    fetchSurvey();
  };

  const onPointerMove = (value: number) => {
    value === 2 || value === 3 || value === 4
      ? setShowToolTip(false)
      : setShowToolTip(true);
  };
  const onPointerLeave = () => setShowToolTip(false);

  useEffect(() => {
    if (
      currentPage === prevPageRef.current + 1 ||
      currentPage === prevPageRef.current - 1
    ) {
      closeModal();
    }
    prevPageRef.current = currentPage;
  }, [currentPage, modal, closeModal]);

  return (
    <Flex
      direction={"row"}
      gap={"20px"}
      align="center"
      justify={windowWidth <= 430 ? "center" : "flex-start"}
      width="100%"
      style={{ marginBottom: windowWidth <= 430 ? "10px" : "0px" }}>
      <>
        <WaitMessage />
        <Flex
          direction={windowWidth <= 430 ? "column" : "row"}
          align="center"
          gap={windowWidth <= 430 ? "20px" : "20px"}>
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
            // showTooltip={showToolTip}
            disableFillHover={voted ? true : false}
            readonly={voted ? true : false}
            allowHover={voted ? false : true}
            transition={true}
            onPointerMove={onPointerMove}
            onPointerLeave={onPointerLeave}
          />
          <>
            {stars > 0 && !voted ? (
              <Button
                style={{ width: "100%" }}
                onClick={handleSubmit}
                title={t("button.submit")}
              />
            ) : null}
          </>
        </Flex>
      </>
    </Flex>
  );
};

export default StarRating;
