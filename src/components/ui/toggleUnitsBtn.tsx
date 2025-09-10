import SettingsIcon from "@/assets/images/icon-units.svg?react";
import ArrowDown from "@/assets/images/icon-dropdown.svg?react";

interface ToggleUnitsBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
}

const ToggleUnitsBtn = ({ onClick, isOpen }: ToggleUnitsBtnProps) => {
  return (
    <button
      onClick={onClick}
      className='flex cursor-pointer px-(--spacing-125) py-(--spacing-100) lg:py-(--spacing-150) lg:px-(--spacing-200) items-center gap-(--spacing-125) rounded-lg bg-neutral-800'
    >
      <SettingsIcon />
      <p>Units</p>
      <ArrowDown
        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
};

export default ToggleUnitsBtn;
