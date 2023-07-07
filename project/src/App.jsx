import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Todos from "./pages/Todos";


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

  {
    path: "/todos",
    element: <Todos />
  }

]);


function App() {
  return (
<RouterProvider router={router} />
  );
}

export default App;
