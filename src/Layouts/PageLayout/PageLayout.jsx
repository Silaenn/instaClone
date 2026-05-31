import { Box, Flex, Spinner, useBreakpointValue } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Navbar from "../../components/Navbar/Navbar";
import FloatingDock from "../../components/Sidebar/FloatingDock";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  const [user, loading] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = !user && !loading && pathname !== "/auth";
  const isMobile = useBreakpointValue({ base: true, md: false });

  const checkingUserIsAuth = !user && loading;
  if (checkingUserIsAuth) return <PageLayoutSpinner />;
  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {/* sidebar on the left */}
      {canRenderSidebar && !isMobile ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Navbar  */}
      {canRenderNavbar ? <Navbar /> : null}

      {/* the page content the right */}
      <Box
        flex={1}
        w={{ base: canRenderSidebar && !isMobile ? "calc(100% - 70px)" : "full", md: "calc(100% - 240px)" }}
        mx={"auto"}
      >
        {children}
      </Box>
      {canRenderSidebar && isMobile && <FloatingDock />}
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex
      flexDir={"column"}
      h={"100vh"}
      alignItems="center"
      justifyContent="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};
