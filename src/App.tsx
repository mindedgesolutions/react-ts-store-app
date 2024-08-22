import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as Sp from "./pages";
import { ErrorElement } from "@/components";
import { store } from "./store";

// Loaders ------
import { loader as landingLoader } from "./pages/Landing";
import { loader as productsLoader } from "./pages/Products";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as checkoutLoader } from "./pages/Checkout";

// Actions ------
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Sp.HomeLayout />,
    errorElement: <Sp.Error />,
    children: [
      {
        index: true,
        element: <Sp.Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      { path: "about", element: <Sp.About />, errorElement: <ErrorElement /> },
      {
        path: "products",
        element: <Sp.Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: "products/:id",
        element: <Sp.SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      { path: "cart", element: <Sp.Cart />, errorElement: <ErrorElement /> },
      {
        path: "checkout",
        element: <Sp.Checkout />,
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: "orders",
        element: <Sp.Orders />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/login",
        element: <Sp.Login />,
        errorElement: <Sp.Error />,
        action: loginAction(store),
      },
      {
        path: "/register",
        element: <Sp.Register />,
        errorElement: <Sp.Error />,
        action: registerAction,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
