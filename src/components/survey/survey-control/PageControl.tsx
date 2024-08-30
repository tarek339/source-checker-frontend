import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";
import SubTitle from "../../fonts/SubTitle";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "../..";

const PageControl = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { surveyPages, currentPage } = useSelectors();
  const {
    setCurrentPage,
    dispatchSurvey,
    setVoted,
    setVotedStars,
    closeModal,
  } = useDispatches();
  const { id } = useParams();

  const handleCurrentPage = async (pageNum: number) => {
    try {
      setVoted(false);
      setVotedStars(0);
      const res = await axios.post(`/survey/set-current-page/${id}`, {
        pageNum,
      });
      dispatchSurvey(res.data.survey);
      setCurrentPage(res.data.survey.pageNum);
    } catch (error) {
      console.log(error);
    }
  };

  const nextPage = () => {
    if (currentPage !== surveyPages.length) {
      closeModal();
      handleCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      closeModal();
      handleCurrentPage(currentPage - 1);
    }
  };

  return (
    <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"20px"}>
        <SubTitle title={t("common.pageControl")} />

        <Flex direction={"column-reverse"} gap={"20px"} width="100%">
          <Button
            onClick={prevPage}
            title={
              <>
                <IoArrowBackSharp fontSize={"22px"} />
                <span>{t("button.back")}</span>
              </>
            }
          />
          <Button
            onClick={nextPage}
            title={
              <>
                <span>{t("button.next")}</span>
                <IoArrowForwardSharp fontSize={"22px"} />
              </>
            }
          />
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default PageControl;
