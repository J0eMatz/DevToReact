import { data } from "autoprefixer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const URL_MONGODB_USERS = "http://localhost:3002/posts/";

  const [urlImage, setURLImage] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.msg === "Publicacion creado") {
          alert("Post has been created");
          navigate("/");
        } else {
          alert("Error, try again or contact your admin");
          navigate("/newpost");
          setIsLoading(false);
        }
      });
  }

  return (
    <form className="flex flex-col gap-5 w-5/6" onSubmit={handleSubmit}>
      <div className="flex flex-row">
        <p className="px-3 py-2 border bg-gray-100 border-gray-300 rounded-l-lg">
          Add a url image
        </p>
        <input
          type="text"
          className="border rounded-md h-10 w-3/5"
          onChange={onImageChange}
          value={urlImage}
        />
      </div>

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
      <textarea
        type="text"
        placeholder="Write your post here..."
        className="border rounded-md h-60 w-5/6"
        onChange={onContentChange}
        value={content}
      />

      <input
        type="submit"
        className="border rounded-md h-10 w-5/6 bg-blue-700 text-white"
        value={isLoading ? "Creating post ...." : "Create"}
      />
    </form>
  );
}
