export default function AsideRPost({ username, avatar }) {
  return (
    <aside className=" flex flex-col gap-3">
      <section className="info__user mt-3 bg-white rounded-lg">
        <div className=" border-t-[30px] border-[#010b1b] rounded-lg">
          <div className=" flex gap-3">
            <img
              src={avatar}
              alt="MDN"
              className="w-12 h-12 -mt-5 rounded-full ml-4"
            />
            <h5 className=" text-lg font-bold">{username}</h5>
          </div>
          <div className=" flex flex-col items-center pt-4 px-3">
            <button
              href="#"
              className=" bg-[#3b49df] font-semibold text-white rounded-lg p-2 w-full"
            >
              Following
            </button>
          </div>
          <div className=" px-3 py-3 flex flex-col gap-3">
            <p>Software Enginner</p>
            <div>
              <span className=" font-medium">WORK</span>
              <p>Full stack developer</p>
            </div>
            <div>
              <span className="font-medium">JOINED</span>
              <p>25 November 2023</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" ">
        <div className=" flex flex-col gap-3 py-3 px-2 bg-white  rounded-lg divide-y">
          <div className=" font-bold text-lg">
            <h5>{`More from ${username}`}</h5>
          </div>
          <ul className="divide-y ">
            <li className=" py-3 ">
              <a
                className="link-underline-light text-dark hover:text-blue-700"
                href=""
              >
                AI code generation vs. coding by hand - what programming is
                going to look like in 202X 🤖 🤔
              </a>
              <p className=" text-sm">31 comments</p>
            </li>
            <li className=" py-3 ">
              <a
                className="link-underline-light text-dark hover:text-blue-700"
                href=""
              >
                Develop the right thing every time and become a 10x engineer 🏆:
                The art of writing RFCs 🥋
              </a>
              <p className=" text-sm">22 comments</p>
            </li>
            <li className=" py-3 ">
              <a
                className="link-underline-light text-dark hover:text-blue-700"
                href=""
              >
                🛠️6 tools to kickstart your full-stack app with AI 🤖
              </a>
              <p className=" text-sm">56 comments</p>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
}
