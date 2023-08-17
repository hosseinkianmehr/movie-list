import { useJwt } from "react-jwt";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const Routes = () => {


  const token = localStorage.getItem("token");
  const { isExpired}=useJwt(token)
  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <p>home</p>, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "",
          element: <div>User Home Page</div>,
        },
        {
          path: "/profile",
          element: <div>User Profile</div>,
        },
        {
          path: "/logout",
          element: <p>log</p>,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <div>Home Page</div>,
    },
    {
      path: "/login",
      element: <p>login</p>,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;