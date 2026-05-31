import { Avatar, Button, Flex, Text } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";
import { homeButton, homeSurface } from "../../styles/homeStyles";
const SuggestedHeader = () => {
  const { handleLogout, isLoggingOut } = useLogout();
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} p={4} {...homeSurface}>
      <Flex alignItems={"center"} gap={3}>
        <Link to={`/${authUser.username}`}>
          <Avatar size={"md"} src={authUser.profilePicURL} border="3px solid black" borderRadius={0} />
        </Link>
        <Link to={`/${authUser.username}`}>
          <Text fontSize={16} fontWeight={900} textTransform="uppercase" lineHeight={1}>
            {authUser.username}
          </Text>
        </Link>
      </Flex>

      <Button
        size={"sm"}
        bg={"retro.pink"}
        color={"white"}
        border="2px solid black"
        _hover={{ bg: "black" }}
        fontSize={12}
        fontWeight={900}
        borderRadius={0}
        boxShadow="3px 3px 0px 0px #000"
        onClick={handleLogout}
        isLoading={isLoggingOut}
        {...homeButton}
      >
        LOG OUT
      </Button>
    </Flex>
  );
};

export default SuggestedHeader;
