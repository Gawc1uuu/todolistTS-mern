import React, { useState } from "react";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const { signup, error, isPending } = useSignup();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div className="signup">
      <h3>Sign up</h3>
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
        {isPending && <button disabled={true}>...</button>}
        {!isPending && <button>Sign up</button>}
        {error && <p className="auth-error">{error}</p>}
      </form>
    </div>
  );
};

export default Signup;
