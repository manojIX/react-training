import { render } from "@testing-library/react";
import { describe, it } from "@jest/globals";
import Post from "./Post";

describe(Post, () => {
  it("like button increases like count", () => {
    const user = {
      username: "therock",
      full_name: "Dwayne Johnson",
      is_verified: false,
      profile_pic_url:
        "https://cdn.britannica.com/60/222660-050-064DBA89/Dwayne-Johnson-AKA-The-Rock-2019.jpg?w=400&h=300&c=crop",
    };
    const post = {
      id: "",
      like_count: 2,
      post_image_url:
        "https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yOTA1NTMzOC9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTc4OTg1NTAzNn0.TqlDqU_C7Jz2RFe7GV0p4jJ07bGWjfA3Fk8cxkHwwYM/img.jpg?width=1200&height=800&quality=85&coordinates=106%2C0%2C148%2C0",
      comments: [
        {
          comment_user_name: "michael",
          comment: "Ayo",
        },
      ],
    };
    const { getByLabelText } = render(<Post user={user} post={post} />);
    console.log(getByLabelText("likes"));
  });
});
