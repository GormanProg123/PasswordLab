import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
};
