import {
  Avatar,
  Button,
  Divider,
  Flex,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import PostFooter from "../FeedPosts/PostFooter";
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import { useState } from "react";
import { firestore } from "../../firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import useShowToast from "../../hooks/useShowToast";
import usePostStore from "../../store/postStore";
import Caption from "../Comment/Caption";
import { deleteImageFromCloudinary } from "../../utils/cloudinary";
const ProfilePost = ({ post }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  const [isDeleting, setIsDeleting] = useState(false);
  const deletePost = usePostStore((state) => state.deletePost);
  const deletePostFromProfile = useUserProfileStore(
    (state) => state.deletePost
  );

  const handleDeletePost = async () => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    if (isDeleting) return;

    try {
      if (post.imageDeleteToken) {
        await deleteImageFromCloudinary(post.imageDeleteToken);
      }
      const userRef = doc(firestore, "users", authUser.uid);
      await deleteDoc(doc(firestore, "posts", post.id));

      await updateDoc(userRef, {
        posts: arrayRemove(post.id),
      });

      deletePost(post.id);
      deletePostFromProfile(post.id);
      showToast("Success", "Post deleted successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
    } finally {
      setIsDeleting(false);
    }
  };
  return (
    <>
      <GridItem
        onClick={onOpen}
        cursor={"pointer"}
        borderRadius={0}
        overflow={"hidden"}
        border={"3px solid black"}
        position={"relative"}
        aspectRatio={1 / 1}
        boxShadow={"4px 4px 0px 0px #000"}
        transition={"0.1s"}
        _hover={{ transform: "translate(-2px, -2px)", boxShadow: "6px 6px 0px 0px #000" }}
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg={"blackAlpha.700"}
          transition={"all 0.3s ease"}
          zIndex={1}
          justifyContent={"center"}
        >
          <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
            <Flex color="white">
              <AiFillHeart size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {post.likes.length}
              </Text>
            </Flex>

            <Flex color="white">
              <FaComment size={20} />
              <Text fontWeight={"bold"} ml={2}>
                {post.comments.length}
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Image
          src={post.imageURL}
          alt="profile post"
          w={"100%"}
          h={"100%"}
          objectFit={"cover"}
        />
      </GridItem>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered={true}
        size={{ base: "55vw", md: "5xl" }}
      >
        <ModalOverlay />
        <ModalContent border="4px solid black" borderRadius={0} boxShadow={{ base: "none", md: "12px 12px 0px 0px #000" }} maxW={{ base: "95vw", sm: "3xl", md: "5xl" }}>
          <ModalCloseButton zIndex={10} bg="retro.pink" borderRadius={0} border="2px solid black" top="-10px" right="-10px" />
          <ModalBody bg={"retro.bg"} pb={5} p={0}>
            <Flex
              gap={0}
              w={"full"}
              mx={"auto"}
              maxH={"90vh"}
              minH={"50vh"}
              direction={{ base: "column", md: "row" }}
            >
              <Flex
                borderRadius={0}
                overflow={"hidden"}
                borderRight={{ md: "3px solid black" }}
                borderBottom={{ base: "3px solid black", md: "none" }}
                flex={1.5}
                justifyContent={"center"}
                alignItems={"center"}
                bg="black"
              >
                <Image src={post.imageURL} alt="profile post" />
              </Flex>

              <Flex
                flex={1}
                flexDir={"column"}
                px={8}
                py={6}
                display={{ base: "none", md: "flex" }}
              >
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar
                      src={userProfile.profilePicURL}
                      size={"sm"}
                      name={userProfile.username}
                      border="2px solid black"
                    />
                    <Text fontWeight={900} fontSize={14} textTransform="uppercase">
                      {userProfile.username}
                    </Text>
                  </Flex>

                  {authUser?.uid === userProfile.uid && (
                    <Button
                      size={"sm"}
                      bg={"retro.pink"}
                      color="white"
                      border="2px solid black"
                      _hover={{ bg: "black", color: "white" }}
                      borderRadius={0}
                      onClick={handleDeletePost}
                      isLoading={isDeleting}
                      boxShadow="2px 2px 0px 0px #000"
                    >
                      <MdDelete size={20} cursor="pointer" />
                    </Button>
                  )}
                </Flex>
                <Divider my={4} borderColor={"black"} borderBottomWidth="2px" opacity={1} />

                <VStack
                  w="full"
                  alignItems={"start"}
                  maxH={"350px"}
                  overflowY={"auto"}
                  flex={1}
                >
                  {/* CAPTION */}
                  {post.caption && <Caption post={post} />}
                  {/* COMMENTS */}
                  {post.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                  ))}
                </VStack>
                <Divider my={4} borderColor={"black"} borderBottomWidth="2px" opacity={1} />

                <PostFooter isProfilePage={true} post={post} />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePost;
