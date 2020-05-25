import React, { useEffect, useState } from "react";
import { history } from "../../../history";
import { deleteAllCookies, getCookie } from "../../../cookie";
import { LogIn, LogOut } from "react-feather";

const NavbarUser = () => {
  const [cookie, setCookie] = useState(0);
  useEffect(() => {
    setCookie(getCookie("logged-in_forum"));
  });
  if (cookie === 0) {
    setCookie(getCookie("logged-in_forum"));
  }
  return (
    <a tag="a" className="nav-link ">
      {cookie === undefined ? (
        <div
          onClick={(e) => {
            history.push("/login");
          }}
        >
          <LogIn size={14} className="mr-50" />
          <span>Login</span>
        </div>
      ) : (
        <div
          onClick={(e) => {
            deleteAllCookies();
            setCookie(undefined);
            history.push("/login");
          }}
        >
          <LogOut size={14} className="mr-50" />
          <span>Logout</span>
        </div>
      )}
    </a>
  );
};
export default NavbarUser;
