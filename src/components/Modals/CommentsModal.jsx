import {
  Button,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import Comment from "../Comment/Comment";
import usePostComment from "../../hooks/usePostComment";
import { useEffect, useRef } from "react";
import { homeButton, homeInput, homeModal } from "../../styles/homeStyles";

const CommentsModal = ({ isOpen, onClose, post }) => {
  const { handlePostComment, isCommenting } = usePostComment();
  const commentRef = useRef(null);
  const commentsContainerRef = useRef(null);
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    await handlePostComment(post.id, commentRef.current.value);
    commentRef.current.value = "";
  };

  useEffect(() => {
    const scrollToBottom = () => {
      commentsContainerRef.current.scrollTop =
        commentsContainerRef.current.scrollHeight;
    };
    if (isOpen) {
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [isOpen, post.comments.length]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInLeft">
      <ModalOverlay />
      <ModalContent {...homeModal}>
        <ModalHeader fontWeight={900} textTransform="uppercase">Comments</ModalHeader>
        <ModalCloseButton bg="retro.pink" borderRadius={0} border="2px solid black" top="-10px" right="-10px" />
        <ModalBody pb={6}>
          <Flex mb={3} fontWeight={700}>
            Thread view for this post.
          </Flex>
          <Flex
            mb={4}
            gap={4}
            flexDir={"column"}
            maxH={{ base: "45vh", md: "55vh" }}
            overflowY={"auto"}
            ref={commentsContainerRef}
            p={2}
            border="2px solid black"
            bg="white"
          >
            {post.comments.map((comment, idx) => (
              <Comment key={idx} comment={comment} />
            ))}
          </Flex>
          <form onSubmit={handleSubmitComment} style={{ marginTop: "2rem" }}>
            <Input
              placeholder="Add a comment..."
              size={"md"}
              ref={commentRef}
              {...homeInput}
            />
            <Flex w={"full"} justifyContent={"flex-end"}>
              <Button
                type="submit"
                ml={"auto"}
                size={"sm"}
                my={4}
                isLoading={isCommenting}
                bg="retro.main"
                color="black"
                border="3px solid black"
                borderRadius={0}
                fontWeight={900}
                {...homeButton}
              >
                POST
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CommentsModal;
