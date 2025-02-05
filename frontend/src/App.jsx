import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Footer, MainNavbar } from './Components';
import { ToastContainer, Zoom } from 'react-toastify';

function App() {
  return (
    <div className="overflow-hidden">
      <MainNavbar />
      <Outlet />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  );
}

export default App;
