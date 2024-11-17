import { useEffect, useState } from "react";
import { Flex } from "../components";
import { Star } from "../components/icons";
import useSelectors from "./useSelectors";

const useStars = () => {
  const { survey, surveyPages } = useSelectors();
  const [starsAmount, setStarsAmount] = useState(0);
  const stars = [
    { id: 1, icon: <Star /> },
    { id: 2, icon: <Star /> },
    { id: 3, icon: <Star /> },
    { id: 4, icon: <Star /> },
    { id: 5, icon: <Star /> },
  ];

  const fiveStars = (
    <Flex direction={"row"}>
      {stars.map((star) => {
        return <div key={star.id}>{star.icon}</div>;
      })}
    </Flex>
  );
  const fourStars = (
    <Flex direction={"row"}>
      {stars.slice(0, 4).map((star) => {
        return <div key={star.id}>{star.icon}</div>;
      })}
    </Flex>
  );
  const threeStars = (
    <Flex direction={"row"}>
      {stars.slice(0, 3).map((star) => {
        return <div key={star.id}>{star.icon}</div>;
      })}
    </Flex>
  );
  const twoStars = (
    <Flex direction={"row"}>
      {stars.slice(0, 2).map((star) => {
        return <div key={star.id}>{star.icon}</div>;
      })}
    </Flex>
  );
  const oneStar = (
    <Flex direction={"row"}>
      {stars.slice(0, 1).map((star) => {
        return <div key={star.id}>{star.icon}</div>;
      })}
    </Flex>
  );

  useEffect(() => {
    surveyPages.map((page) => {
      return page.starsArray.map((star) => {
        return setStarsAmount(star.stars);
      });
    });
  }, [survey, starsAmount]);

  return {
    fiveStars,
    fourStars,
    threeStars,
    twoStars,
    oneStar,
    starsAmount,
    setStarsAmount,
  };
};

export default useStars;
