import { useEffect, useState } from "react";
import { useBreakPoints, useDispatches, useSelectors } from "../../../../hooks";
import Flex from "../../../containers/Flex";
import { IPages } from "../../../../types/interfaces/interfaces";
import EmptyData from "./EmptyData";
import Screenshot from "../../../ScreenShot";
import { Mobile, Desktop, Generate, Cancel } from "../../../icons";
import OpenGraphView from "../../../OpenGraphView";
import SubTitle from "../../../fonts/SubTitle";
import { IViewsModal } from "../../../../types/interfaces/components";
import { IconButton } from "@mui/material";
import { Modal } from "../../..";

const ViewsModal = ({ pageId }: IViewsModal) => {
  const { viewsModal, surveyPages, survey } = useSelectors();
  const { closeViewsModal } = useDispatches();
  const { windowWidth } = useBreakPoints();

  const [filteredPage, setFilteredPage] = useState<IPages>();

  useEffect(() => {
    const pageFound = surveyPages?.find((page: IPages) => page._id === pageId);
    if (pageFound) {
      setFilteredPage(pageFound);
    }
  }, [pageId, surveyPages]);

  return (
    <Modal
      open={viewsModal}
      onClose={closeViewsModal}
      style={{
        overflowY: windowWidth < 1024 ? "scroll" : "auto",
        height: windowWidth < 1200 ? "80vh" : "auto",
        width: windowWidth > 1440 ? "1400px" : "95%",
      }}>
      <Flex direction={"column"} gap={"10px"}>
        <Flex direction={"row"} justify="space-between" align="center">
          <SubTitle title={"Wähle eine neue Ansicht"} />

          <IconButton onClick={closeViewsModal}>
            <Cancel />
          </IconButton>
        </Flex>
        <Flex
          key={filteredPage?._id}
          direction={windowWidth > 1024 ? "row" : "column"}
          gap={"20px"}
          style={{
            paddingTop: "20px",
            margin: "0 auto",
          }}>
          {filteredPage?.mobileScreenshot === "" ? (
            <EmptyData
              title={
                "Screenshot konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
              }
              width={
                windowWidth >= 768 && windowWidth <= 1250 ? "200px" : "250px"
              }
              height={"580px"}
            />
          ) : (
            <Screenshot
              title={"Mobile"}
              height={"580px"}
              width={
                windowWidth >= 768 && windowWidth <= 1250 ? "200px" : "250px"
              }
              id={survey?._id}
              isMobileView={true}
              pageID={filteredPage?._id ?? ""}
              url={filteredPage?.mobileScreenshot ?? ""}
              icon={<Mobile />}
              gap="3px"
            />
          )}

          {filteredPage?.desktopScreenshot === "" ? (
            <EmptyData
              title={
                "Screenshot konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
              }
              width={
                windowWidth >= 768 && windowWidth <= 1250
                  ? "400px"
                  : windowWidth < 500
                  ? "100%"
                  : "450px"
              }
              height={windowWidth < 500 ? "auto" : "580px"}
            />
          ) : (
            <Screenshot
              title={"Desktop"}
              height={windowWidth < 500 ? "auto" : "580px"}
              width={
                windowWidth >= 768 && windowWidth <= 1250
                  ? "400px"
                  : windowWidth < 500
                  ? "100%"
                  : "450px"
              }
              id={survey?._id}
              isMobileView={false}
              pageID={filteredPage?._id ?? ""}
              url={filteredPage?.desktopScreenshot ?? ""}
              icon={<Desktop />}
              gap="6px"
            />
          )}

          {filteredPage?.openGraph?.ogTitle === "" ||
          filteredPage?.openGraph?.ogDescription === "" ? (
            <EmptyData
              title={
                "Opengraph-Ansicht konnte nicht erstellt werden. Bitte eine andere Darstellung auswählen."
              }
              width={""}
              height={""}
            />
          ) : (
            <OpenGraphView
              pageID={filteredPage?._id ?? ""}
              openGraphView={true}
              ogTitle={filteredPage?.openGraph?.ogTitle ?? ""}
              url={
                filteredPage?.openGraph?.ogImage
                  ?.map((img: { url: string }) => img.url)
                  .toString() ?? ""
              }
              ogDescription={filteredPage?.openGraph?.ogDescription ?? ""}
              icon={<Generate />}
              gap={"6px"}
            />
          )}
        </Flex>
      </Flex>
    </Modal>
  );
};

export default ViewsModal;
