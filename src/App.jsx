import './App.css';
import MainPage from '../src/components/main-page/MainPage';
import Carousal from './components/apps/beginner/photo-carousalApp/Carousal'
import Faq from './components/apps/beginner/faqApp/Faq'
import ErrorPage from './components/error-page'
import Schedule from './components/apps/Intermediate/FootballMatch/components/Pages/Schedule/Schedule'
import {
  createHashRouter,
  // createBrowserRouter,   // remove createHashRouter in the FUTURE added this for using it in ghPages
  RouterProvider,
} from "react-router-dom";
import ShoppingList from './components/apps/beginner/ShoppingList/ShoppingList';
// import ShoppingListReducer from './components/apps/beginner/ShoppingList/ShoppingListReducer/ShoppingListReducer';
// import ShoppingListContext from './components/apps/beginner/ShoppingList/ShoppingListContext/ShoppingListContext';
import Leaderboard from './components/apps/Intermediate/FootballMatch/components/Pages/Leaderboard/Leaderboard';
import PageNotFound from './components/apps/Intermediate/FootballMatch/components/Pages/PageNotFound/PageNotFound';
import QuoteApp from './components/apps/beginner/QuoteApp/QuoteApp';


const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/carousal",
    element: <Carousal />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  // {
  //   path: "/ecom",
  //   element: <Ecommerce />,
  // },
  {
    path: "/footballMatch",
    element: <Schedule />,
  },
  {
    path: "/footballMatch/schedule",
    element: <Schedule />,
  },

  {
    path: "/footballMatch/leaderboard",
    element: <Leaderboard />,
  },
  {
    path: "/footballMatch/*",
    element: <PageNotFound />,
  },
  {
    path: "/quote",
    element: <QuoteApp />,
  },
  {
    path: "/shoppingList",
    element: <ShoppingList />,
    // element: <ShoppingListReducer />,
    // element: <ShoppingListContext />,
  },
], {
  basename: process.env.PUBLIC_URL
});

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
