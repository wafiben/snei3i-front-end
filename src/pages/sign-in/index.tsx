import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { singnIn } from "../../api/user/user";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneUser } from "../../store/users/actions";
import { GlobalState } from "../../types/globalState";
import { ProgressSpinner } from "primereact/progressspinner";
import { AppDispatch } from "../../store/store";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [id, setId] = useState<string | null>(null);

  const { user, loading } = useSelector(
    (state: GlobalState) => state.userReducer
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userDate = { email, password };
    try {
      const res = await singnIn(userDate);
      setId(res.id);
      localStorage.setItem("token", res.token);
    } catch (error) {
      throw new Error("auth failed");
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getOneUser(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (user && user.role === "CLIENT") {
      localStorage.setItem("role", user.role);
      navigate("/users");
    }
    if (user && user.role === "FREELANCER") {
      localStorage.setItem("role", user.role);
      navigate(`/profile/${user.id}`);
    }
  }, [user]);

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
          label="Sign In"
          type="submit"
          className="p-mt-3 p-button-primary"
          style={{ width: "100%" }}
        />
      </form>
    </div>
  );
}; // <-- properly closed component
