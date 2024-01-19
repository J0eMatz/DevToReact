import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bold from "../assets/bold.svg";
import latin from "../assets/latin.svg";
import link from "../assets/link.svg";
import list from "../assets/list.svg";
import H from "../assets/H.svg";
import marks from "../assets/marks.svg";
import image from "../assets/image.svg";

export default function CreatePost() {
  const URL_MONGODB_POSTS = "http://localhost:3002/posts/";
  let token = window.localStorage.getItem("token");
  const [urlImage, setURLImage] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function tokenInfo() {
    const [Header, Payload, Signature] = token.split(".");
    const infoPayload = atob(Payload);
    const infObject = JSON.parse(infoPayload);
    console.log(infObject);
    return infObject;
  }

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

    let randomNumber = Math.floor(Math.random() * 50);
    const actualdate = new Date();
    const militime = actualdate.getTime();
    const dateNowString = actualdate.toDateString();
    const author = tokenInfo()?.user_name;
    const picture = tokenInfo()?.avatar;

    fetch(URL_MONGODB_POSTS, {
      method: "POST",
      body: JSON.stringify({
        url: urlImage,
        title: postTitle,
        tags: [tags],
        description: content,
        date: dateNowString,
        reactions: randomNumber,
        dateMiliseconds: militime,
        picture: picture,
        author: author,
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

      <div className=" bg-white w-5/6 h-10 flex items-center">
        <div className="flex justify-between my-2 mx-16">
          <div className=" flex gap-2">
            <img className=" p-2" src={bold} alt="" />
            <img className=" p-2" src={latin} alt="" />
            <img className=" p-2" src={link} alt="" />
            <img className=" p-2" src={list} alt="" />
            <img className=" p-2" src={H} alt="" />
            <img className=" p-2" src={marks} alt="" />
            <img className=" p-2" src={image} alt="" />
          </div>
        </div>
      </div>

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
