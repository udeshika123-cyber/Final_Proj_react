import {
  Button,
  HStack,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";

function App() {
  const showSideBar = useBreakpointValue({ base: false, lg: true }); // This can be a state variable to toggle visibility
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main" "footer "`,
          lg: `"nav nav" "aside main" "footer footer"`,
        }}
      >
        <GridItem area="nav" bg={"blue"}>
          NavBar
        </GridItem>
        {showSideBar && (
          <GridItem area="aside" bg={"red"}>
            SideBar
          </GridItem>
        )}

        <GridItem area="main">
          <GameGrid />
        </GridItem>
        <GridItem area="footer" bg={"pink"}>
          Footer
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
