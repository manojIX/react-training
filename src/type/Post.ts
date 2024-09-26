export type Post = {
  id: string;
  like_count: number;
  post_image_url: string;
  comments: { comment_user_name: string; comment: string }[];
};
