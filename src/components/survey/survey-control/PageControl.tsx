import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import ContButton from "../../buttons/ContButton";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";
import SubTitle from "../../parents/SubTitle";
import SpanBold from "../../parents/SpanBold";
import axios from "axios";
import { useParams } from "react-router-dom";

const PageControl = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { surveyPages, currentPage } = useSelectors();
  const { setCurrentPage, dispatchSurvey, setVoted, setVotedStars } =
    useDispatches();
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
      handleCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      handleCurrentPage(currentPage - 1);
    }
  };

  return (
    <SubCard width={windowWidth < 768 ? "" : `${100 / 3}%`}>
      <Flex direction={"column"} gap={"5px"}>
        <SubTitle title={t("common.pageControl")} />
        <span style={{ fontWeight: 600 }}></span>
        <SpanBold
          title={`${`${t("common.page")} ${currentPage} ${t("common.of")} ${
            surveyPages.length
          }`}`}
        />
        <Flex direction={"row"} gap={"5px"} justify="center" width="100%">
          <ContButton
            onClick={prevPage}
            title={
              <>
                <IoArrowBackSharp fontSize={"22px"} />
                <span>{t("common.back")}</span>
              </>
            }
            width={"50%"}
          />
          <ContButton
            width={"50%"}
            onClick={nextPage}
            title={
              <>
                <span>{t("common.next")}</span>
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
