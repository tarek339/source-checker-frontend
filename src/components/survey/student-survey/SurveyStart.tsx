import { useEffect, useState } from "react";
import { useSelectors } from "../../../hooks";
import { IPages } from "../../../types/interfaces/interfaces";
import SubHeader from "../../parents/SubHeader";
import Flex from "../../parents/containers/Flex";
import OpenGraphHolder from "./OpenGraphHolder";
import ScreenShotHolder from "./ScreenShotHolder";
import StarRating from "./StarRating";

const SurveyStart = () => {
  const { student, surveyPages, survey, currentPage } = useSelectors();
  const [pageId, setPageId] = useState("");

  useEffect(() => {
    surveyPages.slice(currentPage - 1, currentPage).map((page: IPages) => {
      setPageId(page._id);
    });
  }, [surveyPages, currentPage, pageId]);

  return (
    <Flex direction={"column"} gap={"20px"}>
      <SubHeader
        style={{ marginLeft: "20px", marginRight: "20px" }}
        title={`${student?.freeUserName!}, bewerte folgende Quelle mit Sternen!`}
      />
      <Flex direction={"row"} gap={"0px"} justify="center">
        {surveyPages
          .slice(currentPage - 1, currentPage)
          .map((page: IPages, i: number) => {
            return (
              <div style={{ marginLeft: "20px", marginRight: "20px" }} key={i}>
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
      </Flex>
      <Flex direction={"row"} gap={"0px"} style={{ marginLeft: "20px" }}>
        <StarRating
          pageId={pageId}
          surveyId={survey?._id!}
          studentId={student?._id!}
        />
      </Flex>
    </Flex>
  );
};

export default SurveyStart;
