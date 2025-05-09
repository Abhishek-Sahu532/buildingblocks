import ReactDOM from 'react-dom/client';
import './index.css';
// import './Styles/font.css';
import './Styles/index.css';
import './Styles/tailwind.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
