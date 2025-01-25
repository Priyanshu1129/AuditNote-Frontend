"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Layout } from "antd";
import { useSelector, useDispatch } from "react-redux";
import PrivateLayout from "@/components/layout/Layout";
import { checkAuth } from "@/redux/actions/authAction";
import { setRouter } from "@/utilities/globalRouter";
import { FullScreenLoading } from "@/components";

const NoLayout = ({ children }) => (
  <Layout
    style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {children}
  </Layout>
);

const publicRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/forgot-password/input-otp",
];

export const ProtectedPage = ({ children }) => {
  const { checked, status, data, permissions } = useSelector(
    (state) => state.auth.authDetails
  );

  const dispatch = useDispatch();
  const router = useRouter();
  const currentPath = usePathname();
  const isPublicRoute = publicRoutes.includes(currentPath);

  useEffect(() => {
    setRouter(router); // Setup global router
  }, [router]);

  useEffect(() => {
    if (!checked) {
      dispatch(checkAuth()); // Trigger authentication check
    }
  }, [checked, dispatch]);

  if (!checked || status === "pending") {
    return (
      <NoLayout>
        <FullScreenLoading />
      </NoLayout>
    );
  }

  if (data) {
    // User is authenticated
    if (isPublicRoute) {
      router.replace("/"); // Redirect to home if authenticated and accessing a public route
      return <NoLayout>Redirecting...</NoLayout>;
    }
    const Wrapper = PrivateLayout;
    return <Wrapper>{children}</Wrapper>;
  } else {
    // User not authenticated
    if (isPublicRoute) {
      return <NoLayout>{children}</NoLayout>; // Render public route
    } else {
      router.replace("/login"); // Redirect to login
      return <NoLayout>Redirecting...</NoLayout>;
    }
  }
};
