import { Badge } from "@chakra-ui/react";

interface CritcScoreProps {
  score: number;
}

const CritcScore = ({ score }: CritcScoreProps) => {
  return (
    <Badge
      fontSize={"10px"}
      paddingX={2}
      borderRadius={"4px"}
      fontWeight={"bold"}
      color={score > 75 ? "green.500" : score > 50 ? "yellow.500" : "red.500"}
    >
      {score}
    </Badge>
  );
};

export default CritcScore;
