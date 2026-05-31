import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/contants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";
import { timeAgo } from "../../utils/timeAgo";
import CommentsModal from "../Modals/CommentsModal";
import { homeButton, homeInput, homeSurfaceSoft } from "../../styles/homeStyles";

const PostFooter = ({ post, isProfilePage, creatorProfile }) => {
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const authUser = useAuthStore((state) => state.user);
  const commentREf = useRef(null);
  const { handleLikePost, isLiked, likes } = useLikePost(post);
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };

  return (
    <Box mb={0} mt={"auto"} pt={4}>
      <Flex
        alignItems={"center"}
        gap={4}
        w={"full"}
        pt={4}
        mb={3}
        borderTop="2px solid black"
      >
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box
          cursor={"pointer"}
          fontSize={18}
          onClick={() => commentREf.current.focus()}
        >
          <CommentLogo />
        </Box>
      </Flex>

      <Text fontWeight={800} fontSize={"sm"} color="black" textTransform="uppercase">
        {likes} likes
      </Text>

      {isProfilePage && (
        <Text fontSize="12" color={"black"} opacity={0.6}>
          Posted {timeAgo(post.createdAt)}
        </Text>
      )}

      {!isProfilePage && (
        <>
          <Box {...homeSurfaceSoft} p={3} mt={3}>
            <Text fontSize="sm" fontWeight={800}>
              {creatorProfile?.username}{" "}
              <Text as="span" fontWeight={500}>
                {post.caption}
              </Text>
            </Text>
          </Box>

          {post.comments.length > 0 && (
            <Text
              fontSize="sm"
              color={"black"}
              opacity={0.6}
              cursor={"pointer"}
              fontWeight={"bold"}
              textDecoration={"underline"}
              onClick={onOpen}
            >
              View all {post.comments.length} comments
            </Text>
          )}
          {/* // {COMMENTS MODAL ONLY IN THE HOME PAGE} */}
          {isOpen ? (
            <CommentsModal isOpen={isOpen} onClose={onClose} post={post} />
          ) : null}
        </>
      )}

      {authUser && (
        <Flex alignItems={"center"} gap={2} justifyContent={"space-between"} mt={4} {...homeSurfaceSoft} p={2}>
          <InputGroup>
            <Input
              variant={"outline"}
              placeholder={"Add a comment..."}
              fontSize={14}
              onChange={(e) => setComment(e.target.value)}
              value={comment}
              ref={commentREf}
              {...homeInput}
            />
            <InputRightElement width="4.5rem">
              <Button
                size="sm"
                bg="retro.main"
                color="black"
                onClick={handleSubmitComment}
                isLoading={isCommenting}
                h="full"
                w="full"
                {...homeButton}
                _hover={{ bg: "retro.pink", color: "white", transform: "translate(2px, 2px)", boxShadow: "none" }}
              >
                POST
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
