import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homePage/Homepage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/:username" element={<ProfilePage />} />
        </Routes>
      </PageLayout>
    </>
  );
}

export default App;
