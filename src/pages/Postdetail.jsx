import { useEffect } from "react";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Fasidepost from "../components/Fasidepost";
import Sasidepost from "../components/Sasidepost";

export default function Postdetail() {
  const [post, setPost] = useState({});
  let { id } = useParams();

  const URL_MONGODB = `http://localhost:3002/posts/${id}`;

  useEffect(() => {
    fetch(URL_MONGODB)
      .then((response) => response.json())
      .then((x) => {
        setPost(x.data);
      });
  }, []);

  return (
    <>
      <Outlet />
      <main className="grid grid-cols-12 gap-4 justify-center bg-gray-100">
        <div className="col-start-2 col-span-1">
          <Fasidepost />
        </div>

        <section className="col-span-6 mt-8 rounded-md border bg-white">
          <div>
            <img className="rounded-t-lg" src={post.url} alt="" />
          </div>
          <div className="p-9">
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
            <div className="mt-2">
              <h1 className="font-extrabold text-3xl mt-2">{post.title}</h1>
              <p className="mt-4 font-thin">{post.tags}</p>
              <p className="mt-4 text-xl text-justify">{post.description}</p>
            </div>
          </div>
        </section>

        <div className="mt-4 col-end-12 col-span-3">
          <Sasidepost username={post.author} avatar={post.picture} />
        </div>
      </main>
    </>
  );
}
