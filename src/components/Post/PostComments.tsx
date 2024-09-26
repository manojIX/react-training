type Props = { profile_image_url: string };

export default function PostComments(props: Props) {
  const { profile_image_url } = props;

  let comments = [
    {
      comment_user_name: "manoj",
      comment:
        "this is a long text this is a long texat this is a long text th",
    },
    {
      comment_user_name: "manoj",
      comment:
        "this is a long text this is a long texat this is a long text th",
    },
  ];

  return (
    <div className="px-[12px]">
      {comments.map((comment) => (
        <div className="leading-4 my-[3px]">
          <span className="font-semibold mr-[4px]">
            {comment.comment_user_name}
          </span>
          <span className="font-normal"> {comment.comment}</span>
        </div>
      ))}

      <div className="flex items-center h-[40px]">
        <img
          className="rounded-full w-[24px] h-[24px]"
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
