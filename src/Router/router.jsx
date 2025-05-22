import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "../pages/Home";

function Layout() {
  return (
    <>
  
      <Outlet />
    
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
		{ path: "/", element: <Home /> },
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