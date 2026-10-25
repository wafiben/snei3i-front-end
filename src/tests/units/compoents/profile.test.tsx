import "@testing-library/jest-dom";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Profile } from "../../../pages/freelance-profile";
import { userSlice } from "../../../store/users/reducer";
import { UserState } from "../../../types/userState";

jest.mock("primereact/avatar", () => ({
  Avatar: ({ label }: any) => <div>{label}</div>,
}));

jest.mock("primereact/card", () => ({
  Card: ({ title, children }: any) => (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  ),
}));

jest.mock("primereact/progressspinner", () => ({
  ProgressSpinner: () => <div>Loading...</div>,
}));

function renderWithStore(userState: Partial<UserState> = {}) {
  const store = configureStore({
    reducer: {
      userReducer: userSlice.reducer,
    },
    preloadedState: {
      userReducer: { ...userSlice.getInitialState(), ...userState },
    },
  });

  return render(
    <Provider store={store}>
      <Profile />
    </Provider>,
  );
}

describe("Profile page", () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("shows no services message when the user has no service list", () => {
    renderWithStore({
      loading: false,
      id: "1",
      user: { name: "Bob", services: [] } as any,
    });

    expect(screen.getByText(/no services available/i)).toBeInTheDocument();
  });

  test("shows the loading spinner when loading is true", () => {
    renderWithStore({ loading: true, id: "1", user: null });

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});