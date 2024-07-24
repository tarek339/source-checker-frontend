import moment from "moment";
import QrCode from "../../QRCode";
import Flex from "../../containers/Flex";
import SubCard from "../../containers/SubCard";
import {
  useBreakPoints,
  useDispatches,
  useSelectors,
  useTranslations,
} from "../../../hooks";
import SubTitle from "../../fonts/SubTitle";
import { useState } from "react";
import QrCodeModal from "./QrCodeModal";
import Span from "../../fonts/Span";
import { Copy, ZoomIn } from "../../icons";

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
        <Flex direction={"row"} gap={"20px"}>
          <Flex
            onClick={openModal}
            direction={"column"}
            gap={"0px"}
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
                  backgroundColor: "#f5f5f5",
                  padding: "4px 5px 5px 4px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <ZoomIn />
              </div>
              <div>
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
    </SubCard>
  );
};

export default SurveyData;
