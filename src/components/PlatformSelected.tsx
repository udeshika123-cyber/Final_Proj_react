import { Button, Menu, Portal } from "@chakra-ui/react";
import React from "react";
import UsePlatforms from "../hooks/UsePlatforms";
import { MenuItem } from "@chakra-ui/react";

const platformSelected = () => {
  const { data, error } = UsePlatforms();
  if (error) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          Platforms selector
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content overflow={"auto"} width={"20%"}>
            {data.map((platform) => (
              <MenuItem value={platform.name}>{platform.name}</MenuItem>
            ))}
            {/* <Menu.Item value="new-txt">New Text File</Menu.Item>
            <Menu.Item value="new-file">New File...</Menu.Item>
            <Menu.Item value="new-win">New Window</Menu.Item>
            <Menu.Item value="open-file">Open File...</Menu.Item>
            <Menu.Item value="export">Export</Menu.Item> */}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default platformSelected;
