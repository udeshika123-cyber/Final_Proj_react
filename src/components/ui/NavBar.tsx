import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo1.png"; // or logo1.jpeg if that's the correct name

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} alt="Logo" boxSize={20} />
    </HStack>
  );
};

export default NavBar;
