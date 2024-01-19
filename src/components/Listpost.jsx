const URL_MONGODB = "http://localhost:3002/posts/";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import heart from "../assets/heart.svg";
import horse from "../assets/unicorn.svg";
import fire from "../assets/fire.svg";
import hands from "../assets/hands.svg";
import explote from "../assets/exploding-head.svg";

export default function Listpost() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL_MONGODB)
      .then((response) => response.json())
      .then((x) => {
        setPosts(x.data);
        console.log(x.data);
      });
  }, []);

  return (
    <>
      {posts.map((post) => {
        return (
          <article
            className="flex flex-col border shadow-xl rounded-md bg-white"
            key={`post-${post._id}`}
          >
            <div>
              <img className="rounded-t-lg" src={post.url} alt="MDN" />
            </div>
            <div className="p-6">
              <div className="flex mt-3 gap-2">
                <img
                  src={post.picture}
                  alt="MDN"
                  className="rounded-full w-12 h-12"
                />
                <div>
                  <h4 className="font-bold">{post.author}</h4>
                  <p className="font-thin">{post.date}</p>
                </div>
              </div>
              <div className="mt-2 p-4">
                <Link to={`/post/${post._id}`} className="font-bold text-3xl">
                  {post.title}
                </Link>
                <div className="flex mt-2">
                  <ul className="flex font-light">
                    <li>{post.tags}</li>
                  </ul>
                </div>
                <div className="mt-2">
                  <ul className="flex flex-row gap-3 ml-2">
                    <div className=" flex ">
                      <img src={heart} alt="" />
                      <img src={explote} alt="" />
                      <img src={horse} alt="" />
                      <img src={hands} alt="" />
                      <img src={fire} alt="" />
                      <p className=" pl-1">{post.reactions} Reactions</p>
                    </div>
                    <li>10 Coments</li>
                    <li className="ml-64">
                      {parseInt(
                        (new Date() - post.dateMiliseconds) / 3600000,
                        10
                      )}{" "}
                      hours read
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
