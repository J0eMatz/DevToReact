import { Outlet } from "react-router-dom";
import CreatePost from "../components/CreatePost";

export default function NewPost() {
  return (
    <>
      <Outlet />
      <div className="p-10 flex flex-row bg-gray-100 gap-2 justify-center">
        <CreatePost />

        <aside className="w-48">
          Writing a Great Post Title Think of your post title as a super short
          (but compelling!) description — like an overview of the actual post in
          one short sentence. Use keywords where appropriate to help ensure
          people can find your post by search.
        </aside>
      </div>
    </>
  );
}
