import { LinkButton, Button, Span } from "../..";
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
import { Copy, ZoomIn } from "../../icons";
import QrCode from "../../QRCode";
import moment from "moment";
import QrCodeComp from "./QrCodeComp";

const Contorl = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey, surveyPages } = useSelectors();
  const {
    dispatchSurvey,
    setCurrentPage,
    closeModal,
    openModal,
    openQrCodeModal,
  } = useDispatches();
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
    surveyPages.map((page) => {
      if (page.starsArray.length < 1) {
        return setNoStars(true);
      } else setNoStars(false);
    });
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

  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const copyToClipboard = () => {
    let link = survey?.link;
    let input = document.createElement("input");
    input.value = `${link}`;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <SubCard
      style={{ paddingLeft: "20px", paddingRight: "20px" }}
      width={windowWidth < 880 ? "100%" : `${75}%`}>
      <NoteModal onClick={startSurvey} />
      <Flex
        direction={windowWidth < 880 ? "column" : "row"}
        gap={"30px"}
        justify="space-between">
        <Flex
          direction={"column"}
          gap={"20px"}
          width={windowWidth > 880 ? "50%" : "100%"}>
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
                title={"Ergebnisse"}
              />
            ) : (
              <Button error onClick={finishSurvey} title={t("button.finish")} />
            )}
          </>
        </Flex>

        <Flex direction={"column"} gap={"15px"}>
          <QrCodeComp />
          <Flex
            direction={windowWidth > 400 ? "row" : "column-reverse"}
            gap={"20px"}>
            <Flex
              onClick={openQrCodeModal}
              direction={"column"}
              style={{ cursor: "pointer" }}>
              <div
                style={{
                  position: "relative",
                }}>
                <div
                  style={{
                    position: "absolute",
                    top: 50,
                    left: 50,
                    zIndex: 1,
                    backgroundColor: "#fff",
                    padding: "4px 5px 5px 4px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5px",
                    boxShadow:
                      "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
                  }}>
                  <ZoomIn />
                </div>
                <div
                  style={{
                    filter: "blur(2px)",
                  }}>
                  <QrCode value={survey?.link!} />
                </div>
              </div>

              <Span title={`ID: ${survey?.surveyId}`} fontWeight={600} />
            </Flex>
            <Flex direction={"column"} gap={"20px"}>
              <Span
                title={`${t("studentAuth.validUntil")}: ${moment(
                  survey?.validUntil
                ).format("DD.MM.YYYY")}`}
                fontWeight={600}
              />

              <Span
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={copyToClipboard}
                title={
                  copied
                    ? t("common.copied").toUpperCase()
                    : t("studentAuth.studentLink").toUpperCase()
                }
                color={hovered ? "#000c9a" : "#2835c3"}
                textDecoration="underline"
                cursor="pointer"
                fontWeight={600}
                icon={<Copy color={hovered ? "#000c9a" : "#2835c3"} />}
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default Contorl;
