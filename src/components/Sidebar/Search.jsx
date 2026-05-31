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
import { homeButton, homeInput, homeModal, sidebarItem } from "../../styles/homeStyles";

const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const searchRef = useRef(null);
  const { user, isLoading, getUserProfile, setUser } = useSearchUser();
  const handleSearchUser = (e) => {
    e.preventDefault();
    getUserProfile(searchRef.current.value);
  };

  const handleClose = () => {
    onClose();
    if (searchRef.current) searchRef.current.value = "";
    setUser(null);
  };

  return (
      <>
        <Tooltip
          hasArrow
          label={"Search"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", lg: "none" }}
        >
          <Flex
            alignItems={"center"}
            gap={4}
            borderRadius={0}
            p={2}
            w={{ base: 12, lg: "full" }}
            justifyContent={{ base: "center", md: "center", lg: "flex-start" }}
            onClick={onOpen}
            {...sidebarItem}
            >
            <SearchLogo />
            <Box display={{ base: "none", lg: "block" }} fontWeight="800">Search</Box>
            </Flex>
        </Tooltip>

      <Modal isOpen={isOpen} onClose={handleClose} motionPreset="slideInLeft">
        <ModalOverlay />
        <ModalContent {...homeModal}>
          <ModalHeader fontWeight={900} textTransform="uppercase">Search user</ModalHeader>
          <ModalCloseButton bg="retro.pink" borderRadius={0} border="2px solid black" top="-10px" right="-10px" />

          <ModalBody pb={6}>
            <form onSubmit={handleSearchUser}>
              <FormControl>
                <FormLabel fontWeight="800">USERNAME</FormLabel>
                <Input
                  placeholder="asaprogrammer"
                  ref={searchRef}
                  {...homeInput}
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
                  {...homeButton}
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
            {!user && !isLoading && (
              <Box mt={4} p={4} border="2px dashed black" bg="white">
                Search a username to preview the profile.
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Search;
