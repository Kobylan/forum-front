import firebase from "firebase/app";

import { history } from "../../../history";
import "firebase/auth";
import "firebase/database";
import axios from "axios";
import { config } from "../../../authServices/firebase/firebaseConfig";

// Init firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

// let firebaseAuth = firebase.auth()

// const initAuth0 = new auth0.WebAuth(configAuth)

export const loginWithJWT = (user) => {
  return (dispatch) => {
    axios
      .post("/api/authenticate/login/user", {
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
