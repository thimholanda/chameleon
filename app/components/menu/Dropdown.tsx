"use client";

import { useEffect, useState } from "react";
import { httpGet } from "@/app/utils/api";
import DropdownItem from "./DropdownItem";
import ActiveProfiles from "./ActiveProfiles";

interface DropodownProps {
  label: string;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const Dropdown: React.FC<DropodownProps> = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState({} as User[]);

  useEffect(() => {
    httpGet("19").then((d) => {
      setUsers(d);
    });
    console.log(users);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users.length]);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onLaunchProfile = (name: string, email: string) => {
    alert(`${name} - ${email}`);
  };

  return (
    <>
      <div className="dropdown">
        <button type="button" className="dropdown-button" id="dropdownButton" aria-haspopup="true" aria-expanded={isOpen} onClick={onToggle}>
          <strong>{label}</strong>
        </button>

        {isOpen && (
          <>
            <ul className={`${isOpen ? "dropdown-open" : ""} dropdown-menu dropdown-section`} aria-labelledby="dropdownButton" role="menu">
              <div>Items</div>
              <a href="/page1">Page 1</a>
              <DropdownItem href="/page2">Page 2</DropdownItem>
              <DropdownItem href="/page3">Page 3</DropdownItem>
              <DropdownItem href="/page4">Page 4</DropdownItem>
            </ul>

            <ul className={`${isOpen ? "dropdown-open" : ""} dropdown-menu dropdown-section`}>
              <div>More items</div>
              <DropdownItem href="/page5">Page 5</DropdownItem>
              <DropdownItem href="/page9">Page 9</DropdownItem>
            </ul>
          </>
        )}
      </div>
      <h2 style={{ marginTop: 20 }}>
        <strong>Profiles</strong>
      </h2>
      <ActiveProfiles users={users} onLaunchProfile={onLaunchProfile} />
    </>
  );
};

export default Dropdown;
