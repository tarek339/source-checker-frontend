import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SurveyContent,
  SideMenu,
  SubTitel,
  Card,
  FramerMotion,
  SubHeader,
  AddPage,
  Flex,
  PagesHolder,
  NoPages,
  ContButton,
  DividerHorizontal,
  BackButton,
} from "../../components";
import {
  useDispatches,
  useTranslations,
  useBreakPoints,
  useSelectors,
  useRequests,
} from "../../hooks";

const AddPages = () => {
  const { openModal, dispatchSideBar } = useDispatches();
  const { t } = useTranslations();
  const { windowWidth } = useBreakPoints();
  const { survey, surveyPages } = useSelectors();
  const { fetchSurvey } = useRequests();
  const navigate = useNavigate();
  const [viewsSelected, setViewsSelected] = useState(false);

  useEffect(() => {
    fetchSurvey();
  }, []);

  useEffect(() => {
    surveyPages?.find((element) => {
      if (element.isMobileView !== null || element.isOpenGraphView !== false) {
        setViewsSelected(true);
      } else setViewsSelected(false);
    });
  }, [surveyPages]);

  useEffect(() => {
    if (survey && survey?.pages && survey?.pages?.length < 1) {
      setViewsSelected(false);
    }
  }, [viewsSelected, survey]);

  return (
    <SurveyContent style={{ position: "relative" }}>
      <SideMenu />
      <SubTitel title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <SubHeader title={t("addPages.header")} />
          <AddPage />
          <Flex
            direction={"column"}
            gap={"25px"}
            justify="center"
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              position: "relative",
              paddingTop: "1em",
            }}>
            {survey && survey?.pages && survey?.pages?.length > 0 ? (
              <PagesHolder />
            ) : (
              <NoPages />
            )}

            <Flex
              direction={"row"}
              gap={"0px"}
              justify="space-between"
              align="center"
              style={{
                borderRadius: "4px",
                marginTop: "2em",
              }}>
              <SubHeader
                style={{ paddingTop: "0px" }}
                title={
                  windowWidth <= 375
                    ? t("addPages.addPagesXs")
                    : t("addPages.addPages")
                }
              />
              <ContButton title={t("addPages.button")} onClick={openModal} />
            </Flex>

            <DividerHorizontal />

            <Flex
              direction={windowWidth <= 500 ? "column-reverse" : "row"}
              gap={"20px"}
              justify="flex-start"
              width="100%">
              <BackButton
                path={`/surveys-manager/save-survey/${survey?._id}`}
              />
              <>
                {survey && survey?.pages && survey?.pages?.length > 0 && (
                  <ContButton
                    onClick={
                      viewsSelected
                        ? () => navigate(`/survey-control/${survey._id}`)
                        : () => {
                            if (
                              survey &&
                              survey?.pages &&
                              survey?.pages?.length > 0
                            ) {
                              dispatchSideBar(true);
                            }
                          }
                    }
                    title={
                      viewsSelected
                        ? t("addPages.shareSurvey")
                        : t("common.chooseView")
                    }
                  />
                )}
              </>
            </Flex>
          </Flex>
        </FramerMotion>
      </Card>
    </SurveyContent>
  );
};

export default AddPages;
