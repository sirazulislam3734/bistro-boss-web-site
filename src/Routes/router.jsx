import { createBrowserRouter } from "react-router-dom";
import MainLoayOut from "../layput/MainLoayOut";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import Dashboard from "../pages/Dashboard";
import OurShop from "../pages/OurShop";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Secret from "../components/Secret";
import PrivateRoute from "./PrivateRoute";
import ContactUs from "../pages/ContactUs";
import Card from "../pages/dashboard_user/Card";
import UsersHome from "../pages/dashboard_user/UsersHome";
import AllUser from "../pages/dashboard_admin/AllUser";
import AddItems from "../pages/dashboard_admin/AddItems";
import UpdateItem from "../pages/dashboard_admin/UpdateItem";
import ManageBookings from "../pages/dashboard_admin/ManageBookings";
import ManageItems from "../pages/dashboard_admin/ManageItems";
import AdminHome from "../pages/dashboard_admin/AdminHome";
import AdminRoute from "./AdminRoute";
import PaymentHistory from "../pages/dashboard_user/PaymentHistory";
import Payment from "../pages/dashboard_user/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLoayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contactUs",
        element: <ContactUs />,
      },
      {
        path: "/ourMenu",
        element: <OurMenu/>,
      },
      {
        path: "/ourShop",
        element: <OurShop />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "secret",
        element: <PrivateRoute><Secret /></PrivateRoute>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [
      {
        path: "userHome",
        element: <UsersHome />,
      },
      {
        path: "reservation",
        element: <Payment />,
      },
      {
        path: "card",
        element: <Card />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },

      // Admin route
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome /></AdminRoute>,
      },
      {
        path: "addItems",
        element: <AdminRoute><AddItems /></AdminRoute>,
      },
      {
        path: "manageItems",
        element: <AdminRoute><ManageItems /></AdminRoute>,
      },
      {
        path: "update/:id",
        element: <AdminRoute><UpdateItem /></AdminRoute>,
        loader: ({params}) => fetch(`http://localhost:4000/menu/${params.id}`)
      },
      {
        path: "manageBookings",
        element: <AdminRoute><ManageBookings /></AdminRoute>,
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUser /></AdminRoute>,
      },
    ]
  },
]);
