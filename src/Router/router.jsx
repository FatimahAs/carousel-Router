import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "../pages/Home";
import Footer from "../component/Footer";
import Forest from "../pages/Forest";
import City from "../pages/City";
import Ocean from "../pages/Ocean";

function Layout() {
  return (
    <>
  
      <Outlet />
      <Footer/>
    
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/forest", element: <Forest /> },
      { path: "/city", element: <City /> },
      { path: "/ocean", element: <Ocean /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;