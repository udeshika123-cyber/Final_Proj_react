import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getOptimizedImageUrl from "../services/image-url";

const GenrlList = () => {
  const { data } = useGenre();
  return (
    <List.Root listStyle={"none"} padding={0}>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={"8px"}
              padding={"5px"}
              src={getOptimizedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}> {genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenrlList;
