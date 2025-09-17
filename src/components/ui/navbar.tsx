import { Link } from "react-router";

import Logo from "@/assets/images/logo.svg?react";
import ToggleUnitsCont from "../../features/toggleUnitsCont";

const Navbar = () => {
  return (
    <header className='flex justify-between'>
      <Link to='/' aria-label='route to home'>
        <Logo className='w-40 lg:w-full' />
      </Link>
      <ToggleUnitsCont />
    </header>
  );
};

export default Navbar;
