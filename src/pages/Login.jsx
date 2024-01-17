import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import github from "../assets/github.svg";
import google from "../assets/google.svg";

export default function Login() {
  const navigate = useNavigate();

  function Home() {
    navigate("/");
  }

  return (
    <main className="flex flex-col justify-center items-center p-10 gap-2">
      <img
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/original_logo_0DliJcfsTcciZen38gX9.png"
        alt="MDN"
        className="w-16 h-16 cursor-pointer"
        onClick={Home}
      />
      <h1 className="font-bold text-3xl mt-6">Join the DEV Community</h1>
      <p>DEV Community is a community of 1,236,828 amazing developers</p>

      <button className="flex flex-row justify-center items-center gap-4 border w-2/5 h-12 rounded-lg border text-sm font-semibold  hover:bg-gray-100">
        <img src={github} className="w-9 h-9" alt="" /> Continue with GitHub
      </button>
      <button className="flex flex-row justify-center items-center gap-4 border w-2/5 h-12 rounded-lg border text-sm font-semibold  hover:bg-gray-100">
        <img src={google} className="w-9 h-9" alt="" />
        Continue with Google
      </button>

      <p className="mt-2 font-light text-gray-500">
        _________________________________________ OR
        _________________________________________
      </p>

      <LoginForm />
    </main>
  );
}
