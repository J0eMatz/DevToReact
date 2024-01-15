import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Newuser() {
  const URL_MONGODB_USERS = "http://localhost:3002/users/";

  const [profileImage, setProfileImage] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passconfirm, setPassconfirm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function onProfileImage(event) {
    setProfileImage(event.target.value);
  }

  function onNameChange(event) {
    setName(event.target.value);
  }

  function onUsernameChange(event) {
    setUsername(event.target.value);
  }

  function onEmailChange(event) {
    setEmail(event.target.value);
  }

  function onPasswordChange(event) {
    setPassword(event.target.value);
  }

  function onPassConfirm(event) {
    setPassconfirm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    fetch(URL_MONGODB_USERS, {
      method: "POST",
      body: JSON.stringify({
        avatar: profileImage,
        name: name,
        user_name: username,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.msg === "Usuario creado") {
          alert("User has been created");
          navigate("/Login");
        } else {
          alert("Error, try again");
          navigate("/CreateAccount");
        }
      });
  }

  return (
    <form
      className="flex flex-col justify-center items-center w-full gap-2 mt-2"
      onSubmit={handleSubmit}
    >
      <label className="w-2/5">Profile image (add URL image)</label>
      <input
        className="w-2/5 h-8 border  rounded-md"
        type="text"
        onChange={onProfileImage}
        value={profileImage}
        required
      />

      <label className="w-2/5">Name:</label>
      <input
        className="w-2/5 h-8 border  rounded-md"
        type="text"
        onChange={onNameChange}
        value={name}
        required
      />

      <label className="w-2/5">Username</label>
      <input
        className="w-2/5 h-8 border  rounded-md"
        type="text"
        onChange={onUsernameChange}
        value={username}
        required
      />

      <label className="w-2/5">Email</label>
      <input
        className="w-2/5 h-8 border  rounded-md"
        type="email"
        onChange={onEmailChange}
        value={email}
        required
      />

      <label className="w-2/5">Password</label>
      <input
        className="w-2/5 h-8 border  rounded-md"
        type="password"
        onChange={onPasswordChange}
        value={password}
        required
      />

      <label className="w-2/5">Password confirmation</label>
      <input
        className="w-2/5 h-8 border  rounded-md"
        type="password"
        onChange={onPassConfirm}
        value={passconfirm}
        required
      />

      <input
        className="w-2/5 border h-8 bg-blue-700 text-white rounded-md hover:bg-blue-800 cursor-pointer"
        type="submit"
        value={isLoading ? "Loading ..." : "Create account"}
      />

      <p className="w-2/5">
        By signing in, you are agreeing to our privacy policy,and terms of use.
      </p>
    </form>
  );
}
