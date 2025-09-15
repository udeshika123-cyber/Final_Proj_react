import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo1.png";

const NavBar = () => {
  return (
    <HStack padding={"20px"}>
      <Image src={logo} height={{ base: "40px", md: "50px", lg: "60px" }} />
    </HStack>
  );
};

export default NavBar;
