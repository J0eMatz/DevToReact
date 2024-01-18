import Firstaside from "../components/Firstaside";
import Listpost from "../components/Listpost";
import Navbar from "../components/Navbar";
import Secondaside from "../components/Secondaside";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="grid grid-cols-12 gap-4 justify-center bg-gray-100">
        <div className="col-start-2 col-span-2 mt-8">
          <Firstaside />
        </div>

        <section className="col-span-6 mt-7">
          <div>
            <div>
              <ul className="flex gap-6 mb-2">
                <li className="flex items-center rounded-lg font-bold hover:bg-white hover:text-blue-700 h-9">
                  <p>RELEVANT</p>
                </li>
                <li className="flex items-center rounded-lg  hover:bg-white hover:text-blue-700 h-9">
                  <p>LATEST</p>
                </li>
                <li className="flex items-center rounded-lg  hover:bg-white hover:text-blue-700 h-9">
                  <p>TOP</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              <Listpost />
            </div>
          </div>
        </section>

        <div className="mt-7 col-end-12 col-span-2">
          <Secondaside />
        </div>
      </main>
    </>
  );
}
