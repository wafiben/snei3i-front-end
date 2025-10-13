import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../types/globalState";
import { ProgressSpinner } from "primereact/progressspinner";
import { AppDispatch } from "../../store/store";
import { logIn } from "../../store/auth/actions";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const loading =
    useSelector((state: GlobalState) => state.authReducer?.loading) || false;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userDate = { email, password };
    dispatch(logIn(userDate));
  };

  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  }

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
          type="submit"
          label="Sign In"
          className="p-mt-3 p-button-primary"
          style={{ width: "100%" }}
        />
      </form>
    </div>
  );
};
