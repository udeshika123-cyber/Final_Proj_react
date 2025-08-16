import { HStack, List, ListItem, Image, Text, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getOptimizedImageUrl from "../services/image-url";

const GenrlList = () => {
  const { data, loading, error } = useGenre();
  if (error) return null;

  if (loading) return <Spinner />; // Optionally handle loading state

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
