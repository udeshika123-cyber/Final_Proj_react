import { Card, Skeleton, SkeletonText, SkeletonCircle } from "@chakra-ui/react";
import React from "react";

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" width={"350px"} />
      <Card.Body>
        <SkeletonText mt="4" noOfLines={3} gap={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
