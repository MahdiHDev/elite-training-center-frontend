import { Outlet } from "react-router";
import MainNavbar from "../components/partials/MainNavbar";

const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
