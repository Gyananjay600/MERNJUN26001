import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Service from "./Service";
import AdminPage from "./AdminPage";
import Profile from "./Profile";
import AdminDashboard from "./AdminDashboard";
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<h1>Not found</h1>} />

        <Route path="/admin" element={<AdminPage />}>
          <Route index element={<AdminDashboard />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
