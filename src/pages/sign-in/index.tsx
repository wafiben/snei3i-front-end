import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { singnInClient } from "../../api/user/user";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/auth/actions";

interface SignInProps {
  onNavigateToSignUp: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onNavigateToSignUp }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch =useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userDate = { email, password };
    try {
      const res = await singnInClient(userDate);
      navigate("/users");
      dispatch(logIn())
      localStorage.setItem("token", res.token);
    } catch (error) {
      throw new Error("auth failed");
    }
  };

  return (
    <div className="flex justify-content-center">
      <form onSubmit={onSubmit} className="p-fluid" style={{ width: "300px" }}>
        <h2 className="text-center">Sign In</h2>
        <div className="field">
          <label htmlFor="email">Email</label>
          <InputText
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="field" style={{ marginTop: "1rem" }}>
          <label htmlFor="password">Password</label>
          <Password
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            toggleMask
            feedback={false}
            required
            inputStyle={{ paddingRight: "2.5rem" }}
          />
        </div>
        <Button
          label="Sign In"
          type="submit"
          className="p-mt-3 p-button-primary"
          style={{ width: "100%" }}
        />
      </form>
    </div>
  );
};
