import { User } from "@type/User";
import { Post as PostType } from "@type/Post";
import PostHeader from "./PostHeader";
import PostComments from "./PostComments";
import Heart from "@svg/Heart";
import { useState } from "react";
import useTheme from "@hooks/useTheme";
import Comment from "@svg/Comment";
import Send from "@svg/Send";
import SaveIcon from "@svg/SaveIcon";

import "./styles.css";

type Props = { user: User; post: PostType; addComment: () => void };

export default function Post(props: Props) {
  const {
    user: { profile_pic_url },
    post: { comments, like_count: likes, post_image_url },
  } = props;
  const { theme } = useTheme();

  const [liked, setLiked] = useState(false);

  return (
    <div
      className={`mx-auto w-[375px] post my-[20px] ${theme === "dark" ? "dark" : ""}`}
    >
      <PostHeader
        profile_url={profile_pic_url}
        profile_name="rock"
        isVerified={false}
      />

      <img className="h-[468px] object-cover mx-auto" src={post_image_url} />

      <div className="flex p-[12px] gap-x-[12px]">
        <span className="inline-flex gap-x-[4px]">
          <Heart
            liked={liked}
            theme={theme}
            onClick={() => setLiked((liked) => !liked)}
          />
          {likes + +liked}
        </span>

        <span className="inline-flex">
          <Comment theme={theme} />
          {comments.length}
        </span>

        <span className="inline-flex">
          <Send theme={theme} />
        </span>

        <span className="inline-flex ml-auto">
          <SaveIcon theme={theme} />
        </span>
      </div>

      <PostComments
        profile_image_url={profile_pic_url}
        comments={comments}
        addComment={props.addComment}
      />
      <span className="px-[12px] text-[#6F7680]"> 11 hours ago</span>
    </div>
  );
}
