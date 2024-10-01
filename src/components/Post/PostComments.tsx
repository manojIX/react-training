type Comment = {
  comment_user_name: string;
  comment: string;
};
type Props = { profile_image_url: string; comments: Comment[] };

export default function PostComments(props: Props) {
  const { profile_image_url, comments } = props;

  return (
    <div className="px-[12px]">
      {comments.map((comment) => (
        <div key={comment.comment_user_name} className="leading-4 my-[3px]">
          <span className="font-semibold mr-[4px]">
            {comment.comment_user_name}
          </span>
          <span className="font-normal"> {comment.comment}</span>
        </div>
      ))}

      <div className="flex items-center h-[40px]">
        <img
          className="rounded-full w-[24px] h-[24px] object-cover "
          src={profile_image_url}
          alt="Profile image"
        />
        <input
          className="flex-grow ml-[8px] bg-[var(--background-color)] text-[var(--font-color)]"
          placeholder="Add a comment..."
        />
      </div>
    </div>
  );
}
