import './App.css';
import MainPage from '../src/components/main-page/MainPage';
import Carousal from './components/apps/photo-carousalApp/Carousal'
import Faq from './components/apps/faqApp/Faq'
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
  {
    path: "/react-beginner-project/faq",
    element: <Faq />,
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
