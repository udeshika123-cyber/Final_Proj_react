import {
  Button,
  HStack,
  Grid,
  GridItem,
  Show,
  useBreakpointValue,
} from "@chakra-ui/react";

function App() {
  const showSideBar = useBreakpointValue({ base: false, lg: true }); // This can be a state variable to toggle visibility
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main" "footer "`,
        lg: `"nav nav" "aside main" "footer footer"`,
      }}
    >
      <GridItem area="nav" bg={"blue"}>
        NavBAr
      </GridItem>
      {showSideBar && (
        <GridItem area="aside" bg={"green"}>
          SideBar
        </GridItem>
      )}

      <GridItem area="main" bg={"red"}>
        Main Content
      </GridItem>
      <GridItem area="footer" bg={"pink"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default App;
