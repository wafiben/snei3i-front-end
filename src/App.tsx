import { Layout } from "./layout";
import { DetailsUser } from "./pages/details-user";
import Home from "./pages/freelancers";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AddUser } from "./pages/add-user";
import { SignIn } from "./pages/sign-in";
import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/users" element={<Home />} />
          <Route path="/add_user" element={<AddUser />} />
          <Route path="/users/:id" element={<DetailsUser />} />
          <Route
            path="/sign-in"
            element={
              <SignIn
                onNavigateToSignUp={function (): void {
                  throw new Error("Function not implemented.");
                }}
              />
            }
          />
          <Route path="/" element={<Navigate to="/sign-in" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
