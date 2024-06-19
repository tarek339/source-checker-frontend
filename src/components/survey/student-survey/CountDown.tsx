import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Flex from "../../parents/containers/Flex";
import SubCard from "../../parents/containers/SubCard";
import ContentContainer from "../../parents/containers/ContentContainer";
import SubTitle from "../../parents/SubTitle";
import { useDispatches } from "../../../hooks";

const CountDown = () => {
  const { setCoundDownStatus } = useDispatches();

  return (
    <ContentContainer maxWidth={400}>
      <SubCard>
        <Flex direction={"column"} gap={"20px"} align="center" justify="center">
          <SubTitle title={"Die Umfrage startet in"} />
          <CountdownCircleTimer
            isPlaying
            duration={10}
            colors={["#ff0000", "#2835c3", "#2835c3", "#31e981"]}
            colorsTime={[7, 5, 2, 0]}
            size={180}
            strokeWidth={12}
            onComplete={() => {
              setCoundDownStatus(true);
            }}>
            {({ remainingTime, color }) => {
              return (
                <Flex
                  direction={"row"}
                  gap={"0px"}
                  align="center"
                  justify="center">
                  <span style={{ fontSize: "64px", color }}>
                    {remainingTime}
                  </span>
                </Flex>
              );
            }}
          </CountdownCircleTimer>
          <SubTitle title={"Viel Spaß!"} />
        </Flex>
      </SubCard>
    </ContentContainer>
  );
};

export default CountDown;
