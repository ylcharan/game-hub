import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelect: (genre: Genre) => void;
  selecteGenre: Genre | null;
}

const GenreList = ({ selecteGenre, onSelect }: Props) => {
  const { data, isLoading, errors } = useGenres();
  if (errors) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                objectFit={"cover"}
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                fontWeight={genre.id === selecteGenre?.id ? "bold" : "normal"}
                onClick={() => onSelect(genre)}
                variant={"link"}
                textAlign={"left"}
                fontSize={"lg"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
