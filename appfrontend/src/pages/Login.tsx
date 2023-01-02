import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="signup">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <label>Password:</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
