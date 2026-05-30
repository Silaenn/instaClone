// 1- COPY AND PASTE AS THE STARTER CODE FOR THE CRAETEPOST COMPONENT
import {
  Box,
  Button,
  CloseButton,
  Flex,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { CreatePostLogo } from "../../assets/contants";
import { BsFillImageFill } from "react-icons/bs";
import { useRef, useState } from "react";
import usePreviewImg from "../../hooks/usePreviewImg";
import useShowToast from "../../hooks/useShowToast";
import useAuthStore from "../../store/authStore";
import usePostStore from "../../store/postStore";
import useUserProfileStore from "../../store/userProfileStore";
import { useLocation } from "react-router-dom";
import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../../firebase/firebase";
import { uploadImageToCloudinary } from "../../utils/cloudinary";
const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [caption, setCaption] = useState("");
  const imageRef = useRef(null);
  const { handleImageChange, selectedFile, setSelectedFile } = usePreviewImg();
  const { isLoading, handleCreatePost } = useCreatePost();
  const showToast = useShowToast();

  const handlePostCreation = async () => {
    if (isLoading) return;
    try {
      await handleCreatePost(selectedFile, caption);
      onClose();
      setCaption("");
      setSelectedFile(null);
    } catch (error) {
      showToast("Error", error.message, "error");
      console.log(error);
    }
  };
  return (
    <>
      <Tooltip
        hasArrow
        label={"Create"}
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
        >
          <CreatePostLogo />
          <Box display={{ base: "none", md: "block" }} fontWeight="800">Create</Box>
        </Flex>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg={"retro.bg"} border={"4px solid black"} borderRadius={0} boxShadow="12px 12px 0px 0px #000">
          <ModalHeader fontWeight={900} textTransform="uppercase">Create Post</ModalHeader>
          <ModalCloseButton bg="retro.pink" borderRadius={0} border="2px solid black" top="-10px" right="-10px" />
          <ModalBody pb={6}>
            <Textarea
              placeholder="Post caption..."
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              bg="white"
              border="2px solid black"
              borderRadius={0}
              _focus={{ boxShadow: "4px 4px 0px 0px #000" }}
            />
            <Input
              type="file"
              hidden
              ref={imageRef}
              onChange={handleImageChange}
            />
            <Flex
              onClick={() => imageRef.current.click()}
              mt={4}
              p={3}
              bg="retro.cyan"
              border="2px solid black"
              cursor="pointer"
              alignItems="center"
              gap={2}
              w="fit-content"
              boxShadow="2px 2px 0px 0px #000"
              _hover={{ transform: "translate(-1px, -1px)", boxShadow: "3px 3px 0px 0px #000" }}
            >
              <BsFillImageFill size={20} />
              <Text fontWeight="800" fontSize="xs">SELECT IMAGE</Text>
            </Flex>
            {selectedFile && (
              <Flex
                mt={5}
                w={"full"}
                position={"relative"}
                justifyContent={"center"}
                border="3px solid black"
                bg="black"
              >
                <Image src={selectedFile} alt="Selected img" />
                <CloseButton
                  position={"absolute"}
                  top={2}
                  right={2}
                  bg="retro.pink"
                  color="white"
                  border="2px solid black"
                  borderRadius={0}
                  onClick={() => {
                    setSelectedFile(null);
                  }}
                />
              </Flex>
            )}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={handlePostCreation}
              isLoading={isLoading}
              bg="retro.main"
              color="black"
              border="3px solid black"
              borderRadius={0}
              fontWeight={900}
              boxShadow="4px 4px 0px 0px #000"
              _hover={{ transform: "translate(-2px, -2px)", boxShadow: "6px 6px 0px 0px #000" }}
            >
              POST
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

function useCreatePost() {
  const showToast = useShowToast();
  const [isLoading, setIsLoading] = useState(false);
  const authUser = useAuthStore((state) => state.user);
  const createPost = usePostStore((state) => state.createPost);
  const addPost = useUserProfileStore((state) => state.addPost);
  const userProfile = useUserProfileStore((state) => state.userProfile);
  const { pathname } = useLocation;

  const handleCreatePost = async (selectedFile, caption) => {
    if (!selectedFile) throw new Error("Please select an image");
    setIsLoading(true);
    const newPost = {
      caption: caption,
      likes: [],
      comments: [],
      createdAt: Date.now(),
      createBy: authUser.uid,
    };

    try {
      const postDocRef = await addDoc(collection(firestore, "posts"), newPost);
      const userDocRef = doc(firestore, "users", authUser.uid);
      await updateDoc(userDocRef, { posts: arrayUnion(postDocRef.id) });
      const uploadResult = await uploadImageToCloudinary({
        file: selectedFile,
        folder: "posts",
      });

      await updateDoc(postDocRef, {
        imageURL: uploadResult.url,
        imageDeleteToken: uploadResult.deleteToken,
      });

      newPost.imageURL = uploadResult.url;
      newPost.imageDeleteToken = uploadResult.deleteToken;

      if (userProfile.uid === authUser.uid)
        createPost({ ...newPost, id: postDocRef.id });
      if (pathname !== "/" && userProfile.uid === authUser.uid)
        addPost({ ...newPost, id: postDocRef.id });

      showToast("Success", "Post created successfully", "success");
    } catch (error) {
      showToast("Error", error.message, "error");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleCreatePost };
}

// 2-COPY AND PASTE FOR THE MODAL
// {

//     <Modal isOpen={isOpen} onClose={onClose} size='xl'>
// 				<ModalOverlay />

// 				<ModalContent bg={"black"} border={"1px solid gray"}>
// 					<ModalHeader>Create Post</ModalHeader>
// 					<ModalCloseButton />
// 					<ModalBody pb={6}>
// 						<Textarea placeholder='Post caption...' />

// 						<Input type='file' hidden />

// 						<BsFillImageFill
// 							style={{ marginTop: "15px", marginLeft: "5px", cursor: "pointer" }}
// 							size={16}
// 						/>
// 					</ModalBody>

// 					<ModalFooter>
// 						<Button mr={3}>Post</Button>
// 					</ModalFooter>
// 				</ModalContent>
// 			</Modal>
// }
