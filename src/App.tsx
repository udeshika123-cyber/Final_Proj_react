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
import NavBar from "./components/ui/NavBar";
import PlatformSelected from "./components/platformSelected";

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
        <GridItem
          area="nav"
          position="sticky"
          zIndex={1}
          top={0}
          bg="black"
        ></GridItem>

        {showSideBar && (
          <GridItem
            area="aside"
            paddingX={5}
            position={"sticky"}
            top={0}
            height={"85vh"}
            overflowY={"auto"}
            css={{
              "&::-webkit-scrollbar": { display: "none" },
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            <GenrlList
              onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        )}

        <GridItem area="main">
          <PlatformSelected />
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
