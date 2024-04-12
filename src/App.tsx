import { Layout } from "./layout";
import { DetailsUser } from "./pages/details-user";
import Home from "./pages/home";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AddUser } from "./pages/add-user";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/users" element={<Home />} />
		  <Route path="/add_user" element={<AddUser />} />
          <Route path="/users/:id" element={<DetailsUser />} />
          <Route path="/" element={<Navigate to="/users" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
