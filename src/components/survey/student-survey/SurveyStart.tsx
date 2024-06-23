import { useEffect, useState } from "react";
import { useDispatches, useSelectors, useTranslations } from "../../../hooks";
import { IPages } from "../../../types/interfaces/interfaces";
import SubTitle from "../../fonts/SubTitle";
import Flex from "../../containers/Flex";
import OpenGraphHolder from "./OpenGraphHolder";
import ScreenShotHolder from "./ScreenShotHolder";
import StarRating from "./StarRating";
import axios from "axios";
import FramerMotion from "../../containers/FramerMotion";

const SurveyStart = () => {
  const { student, surveyPages, survey, currentPage } = useSelectors();
  const { setVotedStars, setVoted, setStars } = useDispatches();
  const { t } = useTranslations();
  const [pageId, setPageId] = useState("");

  const user = survey?.freeUserNames
    ? student?.freeUserName
    : `User ${student?.userNumber}`;

  useEffect(() => {
    surveyPages.slice(currentPage - 1, currentPage).map((page: IPages) => {
      setPageId(page._id);
    });
  }, [surveyPages, currentPage, pageId]);

  const fetchStars = async () => {
    try {
      const res = await axios.get(
        `/survey/get-student-page-stars/${survey?._id}/${pageId}/${student?._id}`
      );
      if (res.data > 0) {
        setVotedStars(res.data);
        setVoted(true);
      }
      if (res.data === "") {
        setVotedStars(0);
        setVoted(false);
        setStars(0);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (student?._id !== undefined && pageId !== "") {
      fetchStars();
    }
  }, [student?._id, pageId]);

  return (
    <FramerMotion>
      <Flex direction={"column"} gap={"20px"}>
        <SubTitle
          style={{ marginLeft: "20px", marginRight: "20px" }}
          title={`${user?.toUpperCase()}, ${t("studentSurvey.title")}`}
        />
        <FramerMotion>
          <Flex direction={"column"} gap={"10px"}>
            <Flex direction={"row"} gap={"0px"} style={{ marginLeft: "20px" }}>
              <StarRating
                pageId={pageId}
                surveyId={survey?._id!}
                studentId={student?._id!}
              />
            </Flex>
            <>
              {surveyPages
                .slice(currentPage - 1, currentPage)
                .map((page: IPages, i: number) => {
                  return (
                    <div
                      style={{ marginLeft: "20px", marginRight: "20px" }}
                      key={i}>
                      {page.isMobileView ? (
                        <ScreenShotHolder src={page.mobileScreenshot} />
                      ) : page.isMobileView === false ? (
                        <ScreenShotHolder src={page.desktopScreenshot} />
                      ) : page.isMobileView === null && page.isOpenGraphView ? (
                        <OpenGraphHolder
                          ogTitle={page.openGraph.ogTitle}
                          ogImage={page.openGraph.ogImage.map(
                            (img: { url: string }) => img.url
                          )}
                          ogDescription={page.openGraph.ogDescription}
                        />
                      ) : null}
                    </div>
                  );
                })}
            </>
          </Flex>
        </FramerMotion>
      </Flex>
    </FramerMotion>
  );
};

export default SurveyStart;
