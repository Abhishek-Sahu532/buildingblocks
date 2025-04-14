import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Footer, MainNavbar } from './Components';
import { ToastContainer, Zoom } from 'react-toastify';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchUserFail, fetchUserRequest, fetchUserSuccess } from './redux/Slices/AuthSlices';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  const checkLoggedInUser = async () => {
    try {
      dispatch(fetchUserRequest());
      console.log('function calling');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          withCredentials: true
        }
      };
      let res = '';
      if (import.meta.env.VITE_DEV_MODE == 'production') {
        res = await axios.get(`${import.meta.env.BACKEND_URL}/api/v1/auth/me`, config);
      } else {
        res = await axios.get(`/api/v1/auth/me`, config);
      }
      console.log('app', res);
      dispatch(fetchUserSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(fetchUserFail(error.response.data.message));
    }
  };
  //checking the logged in user
  useEffect(() => {
    checkLoggedInUser();
  }, [dispatch]);

  return (
    <div className="overflow-hidden py-10">
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
