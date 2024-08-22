import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "../pages/404/NotFoundPage";
import { MainLayout } from "../layout/MainLayout";
import { MainPage } from "../pages/MainPage";
import { RegisterPage } from "../pages/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PrivateRoute } from "./PrivateRoute";
import { isAuth } from "../store/slices/authSlice";
import { LoginPage } from "../pages/LoginPage";

export const AppRoutes = () => {
  const dispatch = useDispatch();
  const { userEmail } = useSelector((state) => state.auth);

  useEffect(() => {
    const { data } = JSON.parse(localStorage.getItem("auth")) || "";
    dispatch(isAuth(data?.email));
  }, [dispatch]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <PrivateRoute
              Component={<MainPage />}
              fallBackPath={"/login"}
              isAllowed={!userEmail}
            />
          ),
        },
      ],
    },
    {
      path: "/login",
      element: (
        <PrivateRoute
          Component={<LoginPage />}
          fallBackPath={"/"}
          isAllowed={userEmail}
        />
      ),
    },
    {
      path: "register",
      element: (
        <PrivateRoute
          Component={<RegisterPage />}
          fallBackPath={"/"}
          isAllowed={userEmail}
        />
      ),
    },

    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return <RouterProvider router={routes} />;
};
