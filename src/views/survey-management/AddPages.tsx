import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContentContainer,
  SideMenu,
  Title,
  Card,
  FramerMotion,
  SubTitle,
  AddPage,
  Flex,
  PagesHolder,
  NoPages,
  SubButton,
  Divider,
  BackButton,
  ButtonContainer,
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
    <ContentContainer style={{ position: "relative" }}>
      <SideMenu />
      <Title title={t("survey.createManagement")} />
      <Card>
        <FramerMotion>
          <SubTitle title={t("addPages.header")} />
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
              direction={windowWidth >= 530 ? "row" : "column"}
              gap={windowWidth < 530 ? "10px" : "0px"}
              justify="space-between"
              align={windowWidth >= 530 ? "center" : "stretch"}
              style={{
                borderRadius: "4px",
                marginTop: "2em",
              }}>
              <SubTitle
                style={{ paddingTop: "0px" }}
                title={t("addPages.addPages")}
              />
              <SubButton title={t("addPages.button")} onClick={openModal} />
            </Flex>

            <Divider />

            <ButtonContainer>
              <BackButton
                path={`/surveys-manager/save-survey/${survey?._id}`}
              />
              <>
                {survey && survey?.pages && survey?.pages?.length > 0 && (
                  <SubButton
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
                    title={t("button.continue")}
                  />
                )}
              </>
            </ButtonContainer>
          </Flex>
        </FramerMotion>
      </Card>
    </ContentContainer>
  );
};

export default AddPages;
