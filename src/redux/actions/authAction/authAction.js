import { axiosRequest } from "@/utilities/axiosHelper";
import { serverURL } from "@/config/config";
import { authActions } from "@/redux/slices/authSlice";

const route = `${serverURL}/auth`;

export const login = (loginData) => async (dispatch) => {
  try {
    console.log("loginData", loginData);
    dispatch(authActions.loginRequest());

    // Using the axiosRequest helper to handle login
    const response = await axiosRequest(
      dispatch,
      "post", // HTTP method for POST request
      `${route}/login`, // Login endpoint
      loginData // Send the login data (username/password)
    );
    console.log("login-response-data", response.data);
    dispatch(authActions.loginSuccess(response.data));
    // Optionally store the token in localStorage or cookies for future use
  } catch (error) {
    console.log("login-error", error);
    dispatch(authActions.loginFailure(error.message || "An error occurred"));
  }
};

export const logout = () => async (dispatch) => {
  try {
    console.log("logout-req");
    dispatch(authActions.logoutRequest());

    // Using axiosRequest to perform the logout request
    const response = await axiosRequest(
      dispatch,
      "get", // HTTP method for GET request
      `${route}/logout` // Logout endpoint
    );

    console.log("logout-successfully:");
    dispatch(authActions.logoutSuccess(response));
    dispatch(authActions.resetAuthState());
  } catch (error) {
    dispatch(
      authActions.logoutFailure(
        error.message || "Unable to logout. Please try again"
      )
    );
  }
};

export const checkAuth = () => async (dispatch) => {
  try {
    console.log("checkAuth");
    dispatch(authActions.checkAuthRequest());

    // Using the improved axiosRequest function
    const response = await axiosRequest(
      dispatch,
      "get",
      `${serverURL}/check-login-user`
    );
    console.log("check-auth-response-data", response.data);
    // Handle the response based on the returned status
    dispatch(authActions.checkAuthSuccess(response.data));
  } catch (error) {
    dispatch(authActions.checkAuthFailure(error.message));
  }
};
