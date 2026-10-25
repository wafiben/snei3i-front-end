import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";
import { SignIn } from "../../../pages/sign-in";
import { authSlice } from "../../../store/auth/reducer";
import * as authActions from "../../../store/auth/actions";

jest.mock("primereact/inputtext", () => {
  const React = require("react");
  return {
    InputText: React.forwardRef(
      ({ id, value, onChange, placeholder, type = "text" }: any, ref: any) => (
        <input
          ref={ref}
          id={id}
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
      ({ id, value, onChange, placeholder }: any, ref: any) => (
        <input
          ref={ref}
          id={id}
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
  Button: ({ type, label, onClick }: any) => (
    <button type={type} onClick={onClick}>
      {label}
    </button>
  ),
}));

jest.mock("primereact/progressspinner", () => ({
  ProgressSpinner: () => <div>Loading...</div>,
}));

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

  return {
    store,
    ...render(
      <Provider store={store}>
        <SignIn />
      </Provider>
    ),
  };
}

describe("SignIn Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the sign in form fields and submit button", () => {
    renderWithStore();

    expect(screen.getByRole("heading", { name: /sign in/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /sign in/i })).toBeInTheDocument();
  });

  test("updates the email and password values as the user types", () => {
    renderWithStore();

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });

    expect(emailInput).toHaveValue("user@example.com");
    expect(passwordInput).toHaveValue("123456");
  });

  test("shows the loading spinner while authentication is in progress", () => {
    renderWithStore({ authReducer: { loading: true, isLoggedIn: false } });

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("calls the login action with the entered email and password when submitted", () => {
    const logInMock = jest
      .spyOn(authActions, "logIn")
      .mockReturnValue({ type: "auth/logIn" } as any);

    renderWithStore();

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "123456" } });
    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(logInMock).toHaveBeenCalledWith({
      email: "user@example.com",
      password: "123456",
    });
  });
});
