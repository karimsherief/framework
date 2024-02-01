import { Navbar, Footer } from "../components";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function RootLayout() {
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>
          Framework |{" "}
          {pathname === "/"
            ? "Home"
            : `${pathname.slice(1)[0].toUpperCase()}${pathname.slice(2)}`}
        </title>
      </Helmet>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
