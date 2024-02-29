import React, { useState } from 'react';
import "./dropdown.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ options, onSelect, showMoreUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };

  const handleOptionSelect = (option) => {
    if (option.path) {
      onSelect(option.path);
      toggleDropdown();
    } else if (option.showMore) {
      window.location.href = showMoreUrl; // Redirect to the specified URL
    }
  };

  return (
    <div className="dropdown">
      <button className={`dropdown-toggle ${isRotated ? 'rotate' : 'rotates'}`} onClick={toggleDropdown}>
        <RiArrowDropDownLine size="3.2rem" cursor="pointer"/>
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        {options.map((option, index) => (
          <li key={index} onClick={() => handleOptionSelect(option)}>
            {option.label}
          </li>
        ))}
        {showMoreUrl && (
          <button className='ButtonShowMore' onClick={() => handleOptionSelect({ showMore: true })}>Show All</button>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
