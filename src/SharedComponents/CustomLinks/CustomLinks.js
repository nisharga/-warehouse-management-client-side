import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { LinkProps } from "react-router-dom";

const CustomLinks = ({ children, to, ...props }: LinkProps) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      style={{ color: match ? "rgba(0, 0, 0, 0.3)" : "" }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLinks;
