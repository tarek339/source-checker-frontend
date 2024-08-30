import { LinkButton, Button } from "../..";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";
import axios from "axios";
import NoteModal from "./NoteModal";
import { useEffect, useState } from "react";

const Contorl = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey, surveyPages } = useSelectors();
  const { dispatchSurvey, setCurrentPage, closeModal, openModal } =
    useDispatches();
  const { fetchSurvey } = useRequests();

  const [noStars, setNoStars] = useState(false);

  const startSurvey = async () => {
    try {
      closeModal();
      await fetchSurvey();
      const res = await axios.put(`/survey/set-survey-status/${survey?._id}`, {
        isStarted: true,
        expiryDate: null,
      });
      dispatchSurvey(res.data.survey);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(
      surveyPages.map((page) => {
        if (page.starsArray.length < 1) {
          return setNoStars(true);
        } else setNoStars(false);
      })
    );
  }, [surveyPages, noStars]);

  const finishSurvey = async () => {
    try {
      const res = await axios.put(`/survey/set-survey-status/${survey?._id}`, {
        isStarted: false,
        expiryDate: new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000),
      });
      dispatchSurvey(res.data.survey);
      fetchSurvey();
      setCurrentPage(1);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SubCard
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
      width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <NoteModal onClick={startSurvey} />
      <Flex direction={"column"} gap={"20px"}>
        <SubTitle title={t("common.surveyControl")} />
        <Button
          onClick={() => {
            if (!noStars) {
              openModal();
            } else startSurvey();
          }}
          title={t("button.start")}
        />
        <>
          {!survey?.isStarted && !noStars ? (
            <LinkButton
              url={`${import.meta.env.VITE_CLIENT_URL}/survey-ranking/${
                survey?._id
              }`}
              title={"Ergebnisse anzeigen"}
            />
          ) : (
            <Button error onClick={finishSurvey} title={t("button.finish")} />
          )}
        </>
      </Flex>
    </SubCard>
  );
};

export default Contorl;
