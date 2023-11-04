import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../Hooks/useGames";
import GameCard from "./GameCard";
import CardSkeliton from "./CardSkeliton";
import GameCardComponent from "./GameCardComponent";
import { Genre } from "../Hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, errors, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {errors && <Text>{errors}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={10}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardComponent key={skeleton}>
              <CardSkeliton />
            </GameCardComponent>
          ))}
        {data.map((game) => (
          <GameCardComponent key={game.id}>
            <GameCard game={game} />
          </GameCardComponent>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
