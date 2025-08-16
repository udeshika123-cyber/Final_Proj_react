import {
  Button,
  HStack,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenrlList from "./components/GenrlList";
import { useEffect, useState } from "react";
import type { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const showSideBar = useBreakpointValue({ base: false, lg: true });

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer "`,
          lg: `"nav nav" "aside main" "footer footer"`,
        }}
      >
        <GridItem area="nav"></GridItem>
        {showSideBar && (
          <GridItem area="aside" paddingX={5}>
            <GenrlList
              onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        )}

        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
        <GridItem area="footer" bg={"pink"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
