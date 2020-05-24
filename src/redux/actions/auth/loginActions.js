import { history } from "../../../history";
import axios from "axios";

const API_URI = "http://localhost:8080";
export const loginWithJWT = (user) => {
  return (dispatch) => {
    axios
      .post(`${API_URI}/api/login`, {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        var loggedInUser;

        if (response.data) {
          loggedInUser = response.data.user;

          dispatch({
            type: "LOGIN_WITH_JWT",
            payload: { loggedInUser, loggedInWith: "jwt" },
          });

          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };
};

export const logoutWithJWT = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_WITH_JWT", payload: {} });
    history.push("/pages/login");
  };
};

export const changeRole = (role) => {
  return (dispatch) => dispatch({ type: "CHANGE_ROLE", userRole: role });
};
