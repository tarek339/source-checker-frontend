import moment from "moment";
import QrCode from "../../QRCode";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import SubTitle from "../../parents/SubTitle";
import SpanBold from "../../parents/SpanBold";
import { useState } from "react";
import QrCodeModal from "./QrCodeModal";

const SurveyData = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { openModal } = useDispatches();
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
      width={windowWidth < 768 ? "" : "40%"}
      style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <Flex direction={"column"} gap={"15px"}>
        <QrCodeModal />
        <SubTitle title={t("common.surveyData")} />
        <Flex direction={"row"} gap={"10px"}>
          <Flex direction={"column"} gap={"0px"}>
            <QrCode
              onClick={openModal}
              cursor="pointer"
              value={survey?.link!}
            />
            <SpanBold title={`ID: ${survey?.surveyId}`} />
          </Flex>
          <Flex direction={"column"} gap={"20px"}>
            <SpanBold
              title={`${t("studentAuth.validUntil")}: ${moment(
                survey?.validUntil
              ).format("DD.MM.YYYY")}`}
            />
            <SpanBold
              title={
                <a
                  style={{ fontWeight: 600, textDecoration: "underline" }}
                  target="_blank"
                  href={survey?.link}>
                  {t("studentAuth.studentLink")}
                </a>
              }
            />
            <SpanBold
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={copyToClipboard}
              title={copied ? t("common.copied") : t("common.copy")}
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: hovered ? "#000c9a" : "#2835c3",
              }}
            />
          </Flex>
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default SurveyData;
