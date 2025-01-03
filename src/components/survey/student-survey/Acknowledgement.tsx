import {
  useRequests,
  useSelectors,
  useStars,
  useTranslations,
} from "../../../hooks";
import SubTitle from "../../fonts/SubTitle";
import Title from "../../fonts/Title";
import Flex from "../../containers/Flex";
import FramerMotion from "../../containers/FramerMotion";
import SubCard from "../../containers/SubCard";
import Thumbnail from "../survery-summary/Thumbnail";
import { useEffect } from "react";

const Acknowledgement = () => {
  const { t } = useTranslations();
  const { student, surveyPages } = useSelectors();
  const { fiveStars, fourStars, oneStar, threeStars, twoStars } = useStars();
  const { fetchSurveyByToken } = useRequests();

  useEffect(() => {
    fetchSurveyByToken();
  }, []);

  return (
    <FramerMotion>
      <Flex direction={"column"}>
        <Title title={t("studentSurvey.thankYou")} />
        <SubCard style={{ marginLeft: "20px", marginRight: "20px" }}>
          <Flex direction={"column"} gap={"20px"} align="center">
            <Flex direction={"row"} justify="center">
              <SubTitle title={t("studentSurvey.ratedInfo")} />
            </Flex>

            <Flex
              style={{ margin: "0 auto" }}
              direction={"column"}
              gap={"15px"}>
              <>
                {surveyPages.map((page) => {
                  return page.starsArray.map((obj, i) => {
                    if (obj.userNumber === student?.userNumber.toString()) {
                      return (
                        <Flex key={i} direction={"row"} gap={"10px"}>
                          <Thumbnail
                            height="40px"
                            width="60px"
                            url={
                              page.isMobileView
                                ? page.mobileScreenshot
                                : page.isMobileView === false
                                ? page.mobileScreenshot
                                : page.isMobileView === null &&
                                  page.isOpenGraphView
                                ? page.openGraph.ogImage?.map(
                                    (img: { url: string }) => img.url
                                  )
                                : null
                            }
                          />
                          <SubTitle title={page.title} />
                          <SubTitle
                            title={
                              obj.stars === 5
                                ? fiveStars
                                : obj.stars === 4
                                ? fourStars
                                : obj.stars === 3
                                ? threeStars
                                : obj.stars === 2
                                ? twoStars
                                : oneStar
                            }
                          />
                        </Flex>
                      );
                    }
                  });
                })}
              </>
            </Flex>

            <Flex direction={"column"}>
              <SubTitle
                style={{ color: "#5cb85c" }}
                title={t("studentSurvey.savedInfo")}
              />
            </Flex>
          </Flex>
        </SubCard>
      </Flex>
    </FramerMotion>
  );
};

export default Acknowledgement;
