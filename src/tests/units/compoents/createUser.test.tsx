import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CreateAccount } from "../../../pages/add-user";
import { userSlice } from "../../../store/users/reducer";
import * as userActions from "../../../store/users/actions";
import { UserState } from "../../../types/userState";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

jest.mock("primereact/inputtext", () => {
  const React = require("react");
  return {
    InputText: ({ value, onChange, placeholder, type = "text" }: any) => (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    ),
  };
});

jest.mock("primereact/button", () => ({
  Button: ({ label, onClick }: any) => (
    <button onClick={onClick}>{label}</button>
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
      <CreateAccount />
    </Provider>,
  );
}

describe("CreateAccount", () => {
  test("renders all form inputs and the Send button", () => {
    renderWithStore();

    expect(screen.getByPlaceholderText(/^name$/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^email$/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^password$/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^Service name$/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^Labor Price$/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/^Estimated Material Cost$/i),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/^Notes$/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  test("shows loading spinner when user data is being created", () => {
    renderWithStore({ loading: true });

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test("submits the form with user and service data and navigates to the profile", async () => {
    const createUserSpy = jest
      .spyOn(userActions, "createUserFreelancer")
      .mockImplementation(() => async () => ({ payload: { id: 42 } }) as any);
    mockNavigate.mockClear();

    renderWithStore();

    fireEvent.change(screen.getByPlaceholderText(/^name$/i), {
      target: { value: "Alice" },
    });
    fireEvent.change(screen.getByPlaceholderText(/^email$/i), {
      target: { value: "alice@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/^password$/i), {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByPlaceholderText(/^Service name$/i), {
      target: { value: "Painting" },
    });
    fireEvent.change(screen.getByPlaceholderText(/^Labor Price$/i), {
      target: { value: "150" },
    });
    fireEvent.change(
      screen.getByPlaceholderText(/^Estimated Material Cost$/i),
      {
        target: { value: "50" },
      },
    );
    fireEvent.change(screen.getByPlaceholderText(/^Notes$/i), {
      target: { value: "priority delivery" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send/i }));

    await waitFor(() => {
      expect(createUserSpy).toHaveBeenCalledWith({
        name: "Alice",
        email: "alice@example.com",
        password: "123456",
        services: [
          {
            name: "Painting",
            laborPrice: 150,
            estimatedMaterialCost: 50,
            notes: "priority delivery",
          },
        ],
      });
      expect(mockNavigate).toHaveBeenCalledWith("/profile/42");
    });
  });
});
