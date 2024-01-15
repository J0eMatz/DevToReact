import { data } from "autoprefixer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const URL_MONGODB_USERS = "http://localhost:3002/auth/login";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [isFailed, setisFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function onSetEmail(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleshowPassword(event) {
    setShowPassword(!showPassword);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setisLoading(true);

    fetch(URL_MONGODB_USERS, {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.token != null) {
          localStorage.setItem("token", data.token);
          setisLoading(false);
          setisFailed(false);
          navigate("/");
        } else {
          setisLoading(false);
          setisFailed(true);
        }
      });
  }

  return (
    <form
      className="p-2 rounded flex flex-col justify-center items-center gap-5 w-full"
      onSubmit={handleSubmit}
    >
      <label className="w-2/5">Email</label>

      <input
        type="text"
        className="border rounded-xl  p-2 w-2/5 "
        onChange={onSetEmail}
        value={email}
        required
      />

      <label className="w-2/5">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        className="w-2/5 border p-2 rounded-xl"
        onChange={onPasswordChange}
        value={password}
        required
      />

      <span
        className="text-xs text-black/50 cursor-pointer"
        onClick={handleshowPassword}
      >
        {showPassword ? "Hide" : "Show"} Password
      </span>

      <input
        type="submit"
        disabled={isLoading}
        value={isLoading ? "Loading..." : "Log In"}
        className="bg-blue-700 text-white rounded-md p-2 w-2/5 hover:bg-blue-800 cursor-pointer"
      />

      {isFailed && (
        <p className="bg-red-300 rounded text-white p-2 w-2/5">
          Invalid data please contact your administrator
        </p>
      )}
    </form>
  );
}
