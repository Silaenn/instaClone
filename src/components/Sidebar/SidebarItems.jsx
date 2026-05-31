import ProfileLink from "./ProfileLink";
import CreatePost from "./CreatePost";
import Search from "./Search";
import Home from "./Home";
import { motion } from "framer-motion";
import { childVariant, containerVariant } from "../../animations/variants";

const MotionBox = motion.div;

const SidebarItems = () => {
  return (
    <MotionBox
      variants={containerVariant}
      initial="hidden"
      animate="visible"
      style={{ display: "flex", flexDirection: "column", gap: "20px", width: "100%" }}
    >
      <motion.div variants={childVariant}>
        <Home />
      </motion.div>
      <motion.div variants={childVariant}>
        <Search />
      </motion.div>
      <motion.div variants={childVariant}>
        <CreatePost />
      </motion.div>
      <motion.div variants={childVariant}>
        <ProfileLink />
      </motion.div>
    </MotionBox>
  );
};

export default SidebarItems;
