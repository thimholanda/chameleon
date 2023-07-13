import React, { AnchorHTMLAttributes } from "react";

interface DropdownItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, ...rest }) => {
  return <a {...rest}>{children}</a>;
};

export default DropdownItem;
