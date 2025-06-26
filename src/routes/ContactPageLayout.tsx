import { Outlet } from "react-router";
import ContactNavbar from "../components/partials/ContactNavbar";

const ContactPageLayout = () => {
  return (
    <>
      <ContactNavbar />
      <Outlet />
    </>
  );
};

export default ContactPageLayout;
