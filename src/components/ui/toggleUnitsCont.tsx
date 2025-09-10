import { useState, useRef } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";

import ToggleUnitsBtn from "./toggleUnitsBtn";
import UnitDropdown from "./unitDropdown";

const ToggleUnitsCont = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  return (
    <div ref={dropdownRef} className='relative'>
      <ToggleUnitsBtn isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && <UnitDropdown />}
    </div>
  );
};

export default ToggleUnitsCont;
