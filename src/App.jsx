import './App.css';
import MainPage from '../src/components/main-page/MainPage';
import Carousal from './components/photo-carousal/Carousal'
import ErrorPage from './components/error-page'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/react-beginner-project",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/react-beginner-project/carousal",
    element: <Carousal />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
