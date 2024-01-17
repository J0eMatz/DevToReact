import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Navbar() {
  let [isToken, setIstoken] = useState(false);
  const navigate = useNavigate();
  let token = window.localStorage.getItem("token");

  function tokenInfo() {
    const [Header, Payload, Signature] = token.split(".");
    const infoPayload = atob(Payload);
    const infObject = JSON.parse(infoPayload);
    console.log(infObject);
    return infObject;
  }

  function Logout() {
    window.localStorage.removeItem("token");
    navigate("/login");
  }

  function Login() {
    navigate("/Login");
  }

  function Createaccount() {
    navigate("/CreateAccount");
  }

  function Home() {
    navigate("/");
  }

  function Createpost() {
    navigate("/newpost");
  }

  useEffect(() => {
    if (token) {
      setIstoken(true);
    }
  }, []);

  return (
    <nav className="bg-white/80 h-14 flex flex-row gap-5 p-4 shadow items-center">
      <img
        className="ml-24 max-w-14 cursor-pointer"
        src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
        alt=""
        onClick={Home}
      />

      <input
        className="w-72 h-10 rounded-lg border border-slate-300 shadow-sm placeholder-black focus:outline-none focus:border-sky-700 focus:ring-2"
        type="text"
        placeholder="Search..."
      />

      {isToken && (
        <>
          <button
            className="w-24 h-10 rounded-md  hover:bg-blue-800 hover:underline underline-offset-2 ml-auto bg-blue-700 text-white"
            onClick={Createpost}
          >
            Create post
          </button>

          <div
            className="flex flex-row border rounded-full bg-gray-100 hover:bg-blue-200 cursor-pointer mr-32 w-40"
            onClick={Logout}
          >
            <img
              src={tokenInfo()?.avatar}
              alt=""
              className="rounded-full w-10 h-10"
            />
            <p className="flex flex-col justify-center items-center w-36 h-10 ml-2">
              Log out {tokenInfo()?.user_name}
            </p>
          </div>
        </>
      )}

      {!isToken && (
        <>
          <button
            className="w-20 h-10 rounded-md  hover:bg-sky-100 hover:underline underline-offset-2 hover:text-blue-800 ml-auto"
            onClick={Login}
          >
            Log in
          </button>

          <button
            className="font-bold text-blue-600 w-36 h-10 border border-blue-600 rounded-md hover:bg-blue-700 hover:text-white hover:underline underline-offset-2 mr-32"
            onClick={Createaccount}
          >
            Create Account
          </button>
        </>
      )}
    </nav>
  );
}
