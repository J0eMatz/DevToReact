import Firstaside from "../components/Firstaside";
import Listpost from "../components/Listpost";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <main className="grid grid-cols-12 gap-4 justify-center bg-gray-100">
        <div className="col-start-2 col-span-2 mt-8">
          <Firstaside />
        </div>

        <section className="col-span-6 mt-8">
          <div>
            <div>
              <ul className="flex gap-10 mb-3">
                <li>
                  <p>RELEVANT</p>
                </li>
                <li>
                  <p>LATEST</p>
                </li>
                <li>
                  <p>TOP</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-7">
              <Listpost />
            </div>
          </div>
        </section>

        <div className="col-end-12 col-span-2">
          <aside>SEGUNDO ASIDE</aside>
        </div>
      </main>
    </>
  );
}
