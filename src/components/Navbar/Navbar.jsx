import { Button, Container, Flex, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { homeButton } from "../../styles/homeStyles";

const Navbar = () => {
  return (
    <Container maxW={"container.lg"} my={4}>
      <Flex
        w={"full"}
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={"center"}
        bg="white"
        border="3px solid black"
        p={4}
        boxShadow="8px 8px 0px 0px #000"
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image
            src="/logo.png"
            h={12}
            display={{ base: "none", sm: "block" }}
            cursor={"pointer"}
          />
          <Box display={{ base: "none", sm: "block" }} fontWeight={900} fontSize={{ base: "lg", md: "2xl" }} textTransform="uppercase">
            THREADBOX
          </Box>
        </Link>
        <Flex gap={4}>
          <Link to="/auth">
            <Button {...homeButton} bg={"retro.main"} size={"sm"}>
              Login
            </Button>
          </Link>
          <Link to="/auth">
            <Button {...homeButton} bg={"white"} size={"sm"}>
              Signup
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
