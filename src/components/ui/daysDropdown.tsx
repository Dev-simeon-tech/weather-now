import { useState, useRef } from "react";
import ListComponent from "./listComponent";
import ArrowDropdown from "@/assets/images/icon-dropdown.svg?react";
import { useClickOutside } from "../../hooks/useClickOutside";

type DaysDropdownProps = {
  days: string[];
  selectedDay: string | null;
  onSelectDay: (day: string) => void;
  isLoading: boolean;
};
const DaysDropdown = ({
  days,
  selectedDay,
  onSelectDay,
  isLoading,
}: DaysDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropDownRef, () => {
    setIsOpen(false);
  });
  return (
    <div ref={dropDownRef} className='relative'>
      {isLoading ? (
        <button className='flex items-center gap-(--spacing-150) px-(--spacing-200) py-(--spacing-100) bg-neutral-600 rounded-lg'>
          <p>-</p>
          <ArrowDropdown />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='flex items-center gap-(--spacing-150) px-(--spacing-200) py-(--spacing-100) bg-neutral-600 rounded-lg'
        >
          <p>{selectedDay}</p>
          <ArrowDropdown
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
      )}

      {isOpen && (
        <div className='absolute shadow-1 w-50 top-12 bg-neutral-800 p-(--spacing-100) border-1 border-neutral-600 rounded-xl z-20 right-0'>
          <ListComponent
            data={days}
            renderItem={(day, index) => (
              <button
                key={index}
                onClick={() => onSelectDay(day)}
                className={`w-full text-left px-(--spacing-100) rounded-lg py-(--spacing-125) ${
                  day === selectedDay ? "bg-neutral-700" : ""
                }`}
              >
                {day}
              </button>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default DaysDropdown;
