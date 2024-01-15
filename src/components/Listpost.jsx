const URL_MONGODB = "http://localhost:3002/posts/";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Listpost() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(URL_MONGODB)
      .then((response) => response.json())
      .then((x) => {
        setPosts(x.data);
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
                  <p className="font-thin">{post.time}</p>
                </div>
              </div>
              <div className="mt-3">
                <Link to={`/post/${post._id}`} className="font-bold text-3xl">
                  {post.title}
                </Link>
                <div className="flex">
                  <ul className="flex font-light">
                    <li>{post.tags}</li>
                  </ul>
                  <ul className="flex gap-2 ml-2">
                    <li>20 Reactions</li>
                    <li>10 Coments</li>
                    <li>Time Read</li>
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
