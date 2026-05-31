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
        <Box w={{ base: "70px", md: "70px", lg: "300px" }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* Navbar  */}
      {canRenderNavbar ? <Navbar /> : null}

      {/* the page content the right */}
      <Box
        flex={1}
        w={{ 
          base: "full", 
          md: canRenderSidebar ? "calc(100% - 70px)" : "full", 
          lg: canRenderSidebar ? "calc(100% - 270px)" : "full" 
        }}
        mx={"auto"}
        pb={{ base: canRenderSidebar ? "80px" : 0, md: 0 }} // Add padding on mobile if bottom bar is present
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
