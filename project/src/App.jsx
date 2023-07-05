import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopHeader from './components/TopHeader';
import Homepage from './pages/Homepage';
import Features from './pages/Features';
import Pricing from './pages/Pricing';


import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/features",
    element: <Features />,
  },

  {
    path: "/pricing",
    element: <Pricing />,
  },

]);


function App() {
  return (
<RouterProvider router={router} />
  );
}

export default App;
