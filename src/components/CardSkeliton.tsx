import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSkeliton = () => {
  return (
    <Card>
      <Skeleton
        height={"200px"}
        borderRadius={10}
        overflow={"hidden"}
      ></Skeleton>
      <CardBody height={"100px"}>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default CardSkeliton;
