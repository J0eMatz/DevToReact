import { useState } from "react";

export default function CreatePost() {
  const URL_MONGODB_USERS = "http://localhost:3002/users/";

  const [urlImage, setURLImage] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const actualdate = new Date();
  const militime = actualdate.getTime();
  const dateNow = new Date();
  const dateNowString = dateNow.toDateString();

  function onImageChange(event) {
    setURLImage(event.target.value);
  }

  function onPostChange(event) {
    setPostTitle(event.target.value);
  }

  function onTagsChange(event) {
    setTags(event.target.value);
  }
  function onContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    fetch(URL_MONGODB_USERS, {
      method: "POST",
      body: JSON.stringify({
        url: urlImage,
        title: postTitle,
        tags: [tags],
        description: content,
        date: dateNowString,
      }),
    });
  }

  return (
    <form className="flex flex-col gap-5 w-5/6" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add URL cover image of your post"
        className="border rounded-md h-10 w-5/6"
        onChange={onImageChange}
        value={urlImage}
      />

      <input
        type="text"
        placeholder="New post title here..."
        className="border rounded-md h-10 w-5/6"
        onChange={onPostChange}
        value={postTitle}
      />
      <input
        type="text"
        placeholder="Tags of your post"
        className="border rounded-md h-10 w-5/6"
        onChange={onTagsChange}
        value={tags}
      />
      <input
        type="text"
        placeholder="Write your post here..."
        className="border rounded-md h-60 w-5/6"
        onChange={onContentChange}
        value={content}
      />

      <input
        type="submit"
        className="border rounded-md h-60 w-5/6 bg-blue-700 text-white"
        value={isLoading ? "Creating post ...." : "Create"}
      />
    </form>
  );
}