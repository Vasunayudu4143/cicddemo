import { useState } from "react";

function Login({ correctUsername }) {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username === correctUsername) {
      setMessage("Login Successful");
    } else {
      setMessage("Invalid Username");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>

      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;