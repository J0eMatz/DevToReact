import { useNavigate } from "react-router-dom";
import Newuser from "../components/Newuser";

export default function CreateAccount() {
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
      <h1 className="font-bold text-3xl">Join the DEV Community</h1>
      <p>DEV Community is a community of 1,236,828 amazing developers</p>

      <Newuser />
    </main>
  );
}
