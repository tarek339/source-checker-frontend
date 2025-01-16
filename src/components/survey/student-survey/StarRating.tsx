import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import axios from "axios";
import { StarRatingProps } from "../../../types/interfaces/components";
import { useEffect, useRef } from "react";
import StandbyMessage from "./StandbyMessage";
import { Button, Grid } from "../..";
import { Rating } from "@mui/material";

const StarRating = ({ surveyId, pageId, studentId }: StarRatingProps) => {
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
  const { fetchSurveyByToken } = useRequests();
  const { windowWidth } = useBreakPoints();
  const prevPageRef = useRef(currentPage);

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
  };

  useEffect(() => {
    fetchSurveyByToken();
  }, []);

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
    <Grid
      alignCenter
      justifyContent={windowWidth <= 430 ? "center" : "flex-start"}
      width="100%">
      <>
        <StandbyMessage />
        <Grid
          spacing={1}
          direction={windowWidth <= 430 ? "column" : "row"}
          width={"100%"}
          alignCenter
          nowrap>
          <Rating
            name="simple-controlled"
            defaultValue={stars}
            value={votedStars}
            onChange={(_event, newValue) => {
              handleRating(newValue ?? 0);
            }}
            readOnly={voted}
            max={5}
            sx={{
              fontSize: "2.5rem",
            }}
          />
          <>
            {stars > 0 && !voted ? (
              <Button
                fullWidth={windowWidth <= 430 ? true : false}
                onClick={handleSubmit}
                title={t("button.submit")}
              />
            ) : null}
          </>
        </Grid>
      </>
    </Grid>
  );
};

export default StarRating;
