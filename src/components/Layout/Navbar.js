import { Fragment } from "react";
import NavbarContent from "./NavbarContent";
const Navbar = (props) => {
  return (
    <Fragment>
      <NavbarContent />
      <main>{props.children}</main>
    </Fragment>
  );
};
export default Navbar;
