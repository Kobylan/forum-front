import React from "react";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Media,
  Badge,
} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import axios from "axios";
import * as Icon from "react-feather";
import classnames from "classnames";
import ReactCountryFlag from "react-country-flag";
import Autocomplete from "../../../components/@vuexy/autoComplete/AutoCompleteComponent";
import { useAuth0 } from "../../../authServices/auth0/auth0Service";
import { history } from "../../../history";

const handleNavigation = (e, path) => {
  e.preventDefault();
  history.push(path);
};

const UserDropdown = (props) => {
  const { logout, isAuthenticated } = useAuth0();
  console.log("==============", isAuthenticated);

  return (
    <DropdownMenu className={"mr-1"} right>
      <DropdownItem
        tag="a"
        href="#"
        onClick={(e) => handleNavigation(e, "/profile")}
      >
        <Icon.User size={14} className="mr-50" />
        <span className="align-middle">Edit Profile</span>
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem
        tag="a"
        href="/pages/login"
        onClick={(e) => {
          e.preventDefault();
          if (isAuthenticated) {
            return logout({
              returnTo:
                window.location.origin + process.env.REACT_APP_PUBLIC_PATH,
            });
          } else {
            const provider = props.loggedInWith;
            if (provider !== null) {
              if (provider === "jwt") {
                return props.logoutWithJWT();
              }
              if (provider === "firebase") {
                return props.logoutWithFirebase();
              }
            } else {
              history.push("/pages/login");
            }
          }
        }}
      >
        <Icon.Power size={14} className="mr-50" />
        <span className="align-middle">Log Out</span>
      </DropdownItem>
    </DropdownMenu>
  );
};

class NavbarUser extends React.PureComponent {
  render() {
    return (
      <ul className="nav navbar-nav navbar-nav-user float-right">
        <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
          <DropdownToggle tag="a" className="nav-link dropdown-user-link">
            <div className="user-nav d-sm-flex d-none">
              <span className="user-name text-bold-600">
                {this.props.userName}
              </span>
              <span className="user-status">Available</span>
            </div>
            <span data-tour="user">
              <img
                src={this.props.userImg}
                className="round"
                height="40"
                width="40"
                alt="avatar"
              />
            </span>
          </DropdownToggle>
          <UserDropdown {...this.props} />
        </UncontrolledDropdown>
      </ul>
    );
  }
}
export default NavbarUser;
