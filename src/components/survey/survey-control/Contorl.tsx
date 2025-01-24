import { Button, Card, Grid, SubTitle, SummaryButton, Text } from "../..";
import {
  useBreakPoints,
  useDispatches,
  useRequests,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import axios from "axios";
import NoteModal from "./NoteModal";
import { useEffect, useState } from "react";
import moment from "moment";
import QrCodeModal from "./QrCodeModal";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../assets/theme/colors";
import { FaRegCopy } from "react-icons/fa";

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
  const navigate = useNavigate();

  const [noStars, setNoStars] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hoveredUrl, setHoveredUrl] = useState(false);
  const [hoveredQrCode, setHoveredQrCode] = useState(false);

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

  const copyToClipboard = () => {
    const link = survey?.link;
    const input = document.createElement("input");
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
    <Card>
      <NoteModal onClick={startSurvey} />
      <QrCodeModal />

      <Grid
        direction={windowWidth <= 575 ? "column" : "row"}
        width={"100%"}
        maxedWidth
        between
        noMargin
        nowrap>
        <Grid column spacing={2} nowrap noMargin>
          <SubTitle title={t("common.surveyControl")} />
          <Grid column spacing={1} width={"100%"}>
            <Button
              onClick={() => {
                if (!noStars) {
                  openModal();
                } else startSurvey();
              }}
              title={t("button.start")}
              style={{ color: survey?.isStarted ? colors.secondary.main : "" }}
            />
            <>
              {!survey?.isStarted && !noStars ? (
                <SummaryButton
                  onClick={() => {
                    navigate(`/survey-ranking/${survey?._id}`);
                  }}
                />
              ) : (
                <Button
                  error
                  onClick={finishSurvey}
                  title={t("button.finish")}
                />
              )}
            </>
          </Grid>
        </Grid>

        <Grid spacing={2} noMargin nowrap>
          <Grid column spacing={2} noMargin>
            <Text
              text={`${t("studentAuth.validUntil")}: ${moment(
                survey?.validUntil
              ).format("DD.MM.YYYY")}`}
              bold
            />

            <Grid column spacing={1} noMargin nowrap>
              <Text text={"Schülerlink"} />
              <div>
                <Text
                  text={
                    copied ? (
                      "Kopiert"
                    ) : (
                      <span>
                        <FaRegCopy />
                        Link
                      </span>
                    )
                  }
                  color={
                    hoveredUrl ? colors.primary.hover : colors.primary.main
                  }
                  underline={hoveredUrl}
                  pointer
                  bold
                  onMouseEnter={() => setHoveredUrl(true)}
                  onMouseLeave={() => setHoveredUrl(false)}
                  onClick={copyToClipboard}
                />
                <Text text={"oder"} />
                <Text
                  text={"QR-Code"}
                  color={
                    hoveredQrCode ? colors.primary.hover : colors.primary.main
                  }
                  underline={hoveredQrCode}
                  pointer
                  bold
                  onMouseEnter={() => setHoveredQrCode(true)}
                  onMouseLeave={() => setHoveredQrCode(false)}
                  onClick={openQrCodeModal}
                />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Contorl;
