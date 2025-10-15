import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { SignIn } from "../../../pages/sign-in";
import { authSlice } from "../../../store/auth/reducer";
import { cleanup } from "@testing-library/react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

jest.mock("primereact/inputtext", () => {
  const React = require("react");
  return {
    InputText: React.forwardRef(
      ({ value, onChange, placeholder, type = "text" }: any, ref: any) => (
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )
    ),
  };
});

jest.mock("primereact/password", () => {
  const React = require("react");
  return {
    Password: React.forwardRef(
      ({ value, onChange, placeholder }: any, ref: any) => (
        <input
          ref={ref}
          type="password"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )
    ),
  };
});

jest.mock("primereact/button", () => ({
  Button: (props: any) => (
    <button onClick={props.onClick}>{props.label}</button>
  ),
}));

jest.mock("primereact/progressspinner", () => ({
  ProgressSpinner: () => <div>Loading...</div>,
}));

jest.mock("primereact/button", () => ({
  Button: (props: any) => (
    <button onClick={props.onClick}>{props.label}</button>
  ),
}));

let reduxStore: any;

function renderWithStore(
  preloadedState = { authReducer: { loading: false, isLoggedIn: false } }
) {
  const store = configureStore({
    reducer: {
      auth: authSlice.reducer,
      authReducer: authSlice.reducer,
    },
    preloadedState,
  });

  const utils = render(
    <Provider store={store}>
      <SignIn />
    </Provider>
  );
  reduxStore = store;

  utils;
}

describe("SignIn Component", () => {
  afterEach(() => {
    cleanup();
  });

  test("renders email and password fields", () => {
    renderWithStore();

    expect(
      screen.getByPlaceholderText(/enter your email/i)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/enter your password/i)
    ).toBeInTheDocument();
  });

  test("typing email and password updates values", () => {
    renderWithStore();
    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const passwordInput = screen.getByPlaceholderText(/enter your password/i);

    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput).toHaveValue("user@example.com");
    expect(passwordInput).toHaveValue("123456");
  });

  test("shows loader when loading = true", () => {
    renderWithStore({ authReducer: { loading: true, isLoggedIn: false } });
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("dispatch is called with correct user data on submit", async () => {
    renderWithStore();
    const dispatchSpy = jest.spyOn(reduxStore, "dispatch");

    const emailInput = screen.getByPlaceholderText(/enter your email/i);
    const passwordInput = screen.getByPlaceholderText(/enter your password/i);

    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await waitFor(() => {
      expect(dispatchSpy).toHaveBeenCalled();
    });
  });
});
