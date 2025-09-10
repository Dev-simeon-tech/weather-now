import { NavLink } from "react-router";

import Logo from "@/assets/images/logo.svg?react";
import ToggleUnitsCont from "./toggleUnitsCont";

const Navbar = () => {
  return (
    <header className='flex justify-between'>
      <NavLink to='/'>
        <Logo className='w-40 lg:w-full' />
      </NavLink>
      <ToggleUnitsCont />
    </header>
  );
};

export default Navbar;
