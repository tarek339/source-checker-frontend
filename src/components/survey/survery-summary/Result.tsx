import { useDispatches, useTranslations } from "../../../hooks";
import { Next, Prev } from "../../icons";
import { ResultProps } from "../../../types/interfaces/components";
import { Grid, Text } from "../..";
import { useNavigate, useParams } from "react-router-dom";

const Result = ({
  first,
  last,
  setFirst,
  setLast,
  property,
  nextId,
  prevId,
}: ResultProps) => {
  const { t } = useTranslations();
  const { fetchPageId } = useDispatches();
  const { id } = useParams();
  const navigate = useNavigate();

  const nextPage = () => {
    if (last >= property?.length) return;
    setFirst(first + 1);
    setLast(last + 1);
    fetchPageId(nextId);
    navigate(`/survey-summary/${id}/${nextId}`);
  };

  const prevPage = () => {
    if (first === 0) return;
    setFirst(first - 1);
    setLast(last - 1);
    fetchPageId(prevId);
    navigate(`/survey-summary/${id}/${prevId}`);
  };

  return (
    <Grid flexEnd width={"100%"} noMargin alignCenter>
      <Text text={first + 1} bold />
      <Text text={t("common.of")} bold />
      <Text text={property?.length} bold />
      <Prev first={first} onClick={prevPage} fontSize={24} />
      <Next
        last={last}
        propertyLength={property.length}
        onClick={nextPage}
        fontSize={24}
      />
    </Grid>
  );
};

export default Result;
