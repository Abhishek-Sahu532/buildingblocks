import "./App.css";
import { Outlet } from "react-router-dom";
// import Header from './Components/Header'
// import Footer from './Components/Footer'
import { Footer, MainNavbar } from "./Components";

function App() {
  return (
    <div className="overflow-hidden">
      <MainNavbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
