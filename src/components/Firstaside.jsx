import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg";
import reading from "../assets/reading.svg";
import podcasts from "../assets/podcasts.svg";
import videos from "../assets/videos.svg";
import tags from "../assets/tags.svg";
import faq from "../assets/faq.svg";
import forem from "../assets/forem-shop.svg";
import advertise from "../assets/advertise-on-dev.svg";
import about from "../assets/about.svg";
import contact from "../assets/contact.svg";
import guide from "../assets/guides.svg";
import software from "../assets/software-comparisons.svg";
import code from "../assets/code-of-conduct.svg";
import privacy from "../assets/privacy-policy.svg";
import terms from "../assets/terms-of-use.svg";
import insta from "../assets/instagram.svg";
import face from "../assets/facebook.svg";
import github from "../assets/github2.svg";
import twitter from "../assets/twitter.svg";
import twitch from "../assets/twitch.svg";
import foost from "../assets/foostodon.svg";

export default function Firstaside() {
  const navigate = useNavigate();

  function Login() {
    navigate("/Login");
  }

  function Createaccount() {
    navigate("/CreateAccount");
  }

  return (
    <>
      <article className="p-4 border bg-white rounded-lg flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl">
          DEV Community is a community of 1,238,857 amazing developers
        </h1>
        <p className="mt-2">
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>

        <button
          className="mt-6 font-bold text-blue-600 w-full h-10 border border-blue-600 rounded-md hover:bg-blue-700 hover:text-white hover:underline underline-offset-2"
          onClick={Createaccount}
        >
          Create Account
        </button>

        <button
          className="mt-2 w-full h-10 rounded-md  hover:bg-sky-100 hover:underline underline-offset-2 hover:text-blue-800"
          onClick={Login}
        >
          Log in
        </button>
      </article>

      <article className="mt-4">
        <ul className="flex flex-col gap-1">
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={home} alt="" />
            Home
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={reading} alt="" />
            Reading List
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={podcasts} alt="" /> Podcast
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={videos} alt="" /> Videos
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={tags} alt="" />
            Tags
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={faq} alt="" />
            FAQ
          </li>
          <li className="rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={forem} alt="" />
            Forem Shop
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={advertise} alt="" />
            Advertise on DEV
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={about} alt="" /> About
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={contact} alt="" />
            Contact
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={guide} alt="" />
            Guides
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={software} alt="" />
            Software comparision
          </li>
          <li className="font-bold">Other</li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={code} alt="" />
            Code of conduct
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={privacy} alt="" />
            Privacy Policy
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            <img src={terms} alt="" />
            Terms of use
          </li>
        </ul>
      </article>

      <div className="mt-4">
        <ul className="flex flex-row gap-3 w-10 h-10">
          <img
            className="w-7 h-7 rounded-lg hover:bg-blue-200"
            src={twitter}
            alt=""
          />
          <img
            className="w-7 h-7 rounded-lg hover:bg-blue-200"
            src={face}
            alt=""
          />
          <img
            className="w-7 h-7 rounded-lg hover:bg-blue-200"
            src={github}
            alt=""
          />
          <img
            className="w-7 h-7 rounded-lg hover:bg-blue-200"
            src={insta}
            alt=""
          />
          <img
            className="w-7 h-7 rounded-lg hover:bg-blue-200"
            src={twitch}
            alt=""
          />
          <img
            className="w-7 h-7 rounded-lg hover:bg-blue-200"
            src={foost}
            alt=""
          />
        </ul>
      </div>

      <article className="flex flex-col gap-4">
        <h1 className="font-bold text-md">Popular Tags</h1>

        <ul>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            #webdev
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            #javascript
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            #beginners
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            programming
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            #tutorial
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            #react
          </li>
          <li className="cursor-pointer rounded-lg h-8 flex flex-row justify-start items-center gap-4 hover:bg-blue-200 hover:underline hover:underline-offset-2 hover:text-blue-800">
            #python
          </li>
        </ul>
      </article>

      <article className="flex flex-col gap-4 mt-3 border rounded-xl bg-white p-4">
        <h1>DEV Community</h1>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--KfYhPrXu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gxatl8njvv45ht30hcx9.png"
          alt=""
        />
        <p>
          Fill out this survey and help us moderate our community by becoming a
          tag moderator here at DEV.
        </p>
      </article>

      <article className="flex flex-col mt-2 p-4 gap-3">
        <p>
          DEV Community A constructive and inclusive social network for software
          developers. With you every step of your journey.
        </p>
        <p>
          Built on Forem — the open source software that powers DEV and other
          inclusive communities.
        </p>
        <p>Made with love and Ruby on Rails. DEV Community © 2016 - 2024.</p>
      </article>
    </>
  );
}
