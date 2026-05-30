import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchLogo } from "../../assets/contants";
import useSearchUser from "../../hooks/useSearchUser";
import { useRef } from "react";
import SuggestedUser from "../SuggestedUsers/SuggestedUser";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef = useRef(null);
  const { user, isLoading, getUserProfile, setUser } = useSearchUser();
  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };

  console.log(user);
  return (
    <>
      <Tooltip
        hasArrow
        label={"Search"}
        placement="right"
        ml={1}
        openDelay={500}
        display={{ base: "block", md: "none" }}
      >
        <Flex
          alignItems={"center"}
          gap={4}
          borderRadius={0}
          p={2}
          w={{ base: 10, md: "full" }}
          justifyContent={{ base: "center", md: "flex-start" }}
          border="2px solid transparent"
          _hover={{
            bg: "retro.main",
            color: "black",
            border: "2px solid black",
            boxShadow: "4px 4px 0px 0px #000",
            transform: "translate(-2px, -2px)",
          }}
          transition="0.1s"
          onClick={onOpen}
          cursor="pointer"
        >
          <SearchLogo />
          <Box display={{ base: "none", md: "block" }} fontWeight="800">Search</Box>
        </Flex>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent bg={"retro.bg"} border={"4px solid black"} borderRadius={0} boxShadow="12px 12px 0px 0px #000">
          <ModalHeader fontWeight={900} textTransform="uppercase">Search user</ModalHeader>
          <ModalCloseButton bg="retro.pink" borderRadius={0} border="2px solid black" top="-10px" right="-10px" />

          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel fontWeight="800">USERNAME</FormLabel>
                <Input
                  placeholder="asaprogrammer"
                  ref={searchRef}
                  bg="white"
                  border="2px solid black"
                  borderRadius={0}
                  _focus={{ boxShadow: "4px 4px 0px 0px #000" }}
                />
              </FormControl>

              <Flex w={"full"} justifyContent={"flex-end"}>
                <Button
                  type="submit"
                  ml={"auto"}
                  size={"sm"}
                  my={4}
                  isLoading={isLoading}
                  bg="retro.main"
                  color="black"
                  border="3px solid black"
                  borderRadius={0}
                  fontWeight={900}
                  boxShadow="4px 4px 0px 0px #000"
                  _hover={{ transform: "translate(-2px, -2px)", boxShadow: "6px 6px 0px 0px #000" }}
                >
                  SEARCH
                </Button>
              </Flex>
            </form>
            {user && (
              <Box mt={4} p={4} border="2px solid black" bg="white" boxShadow="4px 4px 0px 0px #000">
                <SuggestedUser user={user} setUser={setUser} />
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
