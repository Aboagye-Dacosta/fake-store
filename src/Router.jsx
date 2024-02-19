import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Cart from "./pages/Cart";
import CategoryListings, {
  loader as categoryDataLoader,
} from "./pages/CategoryListings";
import ErrorElement from "./pages/ErrorElement";
import HomePage, { loader as homePageLoader } from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import { loader as sideNavLoader } from "./ui/SideNav";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    loader: sideNavLoader,
    errorElement: <ErrorElement />,

    children: [
      {
        index: true,
        element: <Navigate to="/store
        " replace={true} />,
      },
      {
        path: "/store",
        element: <HomePage />,
        errorElement: <ErrorElement />,
        loader: homePageLoader,
      },
      {
        path: "/store/:category",
        element: <CategoryListings />,
        errorElement: <ErrorElement />,
        loader: categoryDataLoader,
      },
      {
        path: "/store/:category/:productId",
        element: <ProductDetails />,
        errorElement: <ErrorElement />,
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
    ],
  },
]);
