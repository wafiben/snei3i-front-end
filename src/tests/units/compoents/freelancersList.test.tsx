import "@testing-library/jest-dom";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import Home from "../../../pages/freelancers";
import { userSlice } from "../../../store/users/reducer";
import { UserState } from "../../../types/userState";

jest.mock("../../../components/static-area", () => ({
  UsersStatistics: () => <div>Users statistics</div>,
}));

jest.mock("../../../components/menu-bar", () => ({
  MenuBar: () => <div>Menu bar</div>,
}));

jest.mock("../../../components/user", () => ({
  UserCard: ({ user }: any) => <div>{user.name}</div>,
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
      <Home />
    </Provider>,
  );
}

describe("Freelancers home page", () => {
  beforeEach(() => {
    jest.spyOn(React, "useEffect").mockImplementation(() => undefined);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders users statistics and the list of freelancers", () => {
    const users = [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ] as any;

    renderWithStore({ users, loading: false });

    expect(screen.getAllByText(/users statistics/i)).toHaveLength(2);
    expect(screen.getByText(/alice/i)).toBeInTheDocument();
    expect(screen.getByText(/bob/i)).toBeInTheDocument();
    expect(screen.getByText(/menu bar/i)).toBeInTheDocument();
  });

  test("shows the loading spinner while the user list is loading", () => {
    renderWithStore({ users: [], loading: true });

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});