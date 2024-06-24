import moment from "moment";
import QrCode from "../../QRCode";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useStars,
  useTranslations,
} from "../../../hooks";
import SubTitle from "../../fonts/SubTitle";
import { useState } from "react";
import QrCodeModal from "./QrCodeModal";
import Span from "../../fonts/Span";
import Link from "../../fonts/Link";

const SurveyData = () => {
  const { windowWidth } = useBreakPoints();
  const { t } = useTranslations();
  const { survey } = useSelectors();
  const { openModal } = useDispatches();
  const { starsAmount } = useStars();

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
        <Flex direction={"row"} gap={"20px"}>
          <Flex direction={"column"} gap={"0px"}>
            <QrCode
              onClick={openModal}
              cursor="pointer"
              value={survey?.link!}
            />
            <Span title={`ID: ${survey?.surveyId}`} fontWeight={600} />
          </Flex>
          <Flex direction={"column"} gap={"20px"}>
            <Span
              title={`${t("studentAuth.validUntil")}: ${moment(
                survey?.validUntil
              ).format("DD.MM.YYYY")}`}
              fontWeight={600}
            />
            <Link
              url={survey?.link!}
              title={t("studentAuth.studentLink")}
              fontWeight={600}
              fontSize={18}
            />
            <Span
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={copyToClipboard}
              title={copied ? t("common.copied") : t("common.copy")}
              color={hovered ? "#000c9a" : "#2835c3"}
              textDecoration="underline"
              cursor="pointer"
              fontWeight={600}
            />
            <>
              {!survey?.isStarted && starsAmount > 0 ? (
                <Link
                  url={`http://localhost:5173/survey-ranking/${survey?._id}`}
                  title={t("common.summary")}
                  fontWeight={600}
                  fontSize={18}
                />
              ) : null}
            </>
          </Flex>
        </Flex>
      </Flex>
    </SubCard>
  );
};

export default SurveyData;
