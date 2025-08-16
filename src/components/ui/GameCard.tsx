import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import type { Game } from "../../hooks/useGames";
import PlatformIconList from "../PlatformIconList";
import CritcScore from "../CritcScore";
import getOptimizedImageUrl from "../../services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={"2xl"} overflow="hidden">
      <Image src={getOptimizedImageUrl(game.background_image)} />
      <CardBody>
        <Heading>{game.name}</Heading>
        <HStack justifyContent="space-between" mt={2}>
          <PlatformIconList platforms={game.platforms.map((p) => p.platform)} />
          <CritcScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
