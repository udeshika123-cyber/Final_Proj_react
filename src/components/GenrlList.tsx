import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
} from "@chakra-ui/react";
import useGenre, { type Genre } from "../hooks/useGenre";
import getOptimizedImageUrl from "../services/image-url";

interface GenrlListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre?: Genre | null;
}

const GenrlList = ({ onSelectGenre, selectedGenre }: GenrlListProps) => {
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
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={genre.id === selectedGenre?.id ? "xl" : "md"}
              variant={"ghost"}
              onClick={() => {
                onSelectGenre(genre);
              }}
            >
              {" "}
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List.Root>
  );
};

export default GenrlList;
