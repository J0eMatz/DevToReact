import book from "../assets/bookmark.svg";
import comments from "../assets/comments.svg";
import heart from "../assets/corazon.svg";

export default function Fasidepost() {
  return (
    <aside className=" flex flex-col items-center gap-1 pt-7">
      <button className=" p-2 w">
        <img src={book} alt="" />
        <span>34</span>
      </button>
      <button className=" p-2">
        <img src={comments} alt="" />
        <span>10</span>
      </button>
      <button className=" p-2">
        <img src={heart} alt="" />
        <span>12</span>
      </button>
      <button className=" p-2 ">
        <img src="../src/assets/puntosH.svg" alt="" />
      </button>
    </aside>
  );
}
