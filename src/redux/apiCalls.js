import {
  loginFailure,
  loginStart,
  loginSuccess,
  logOut,
  registerUserStart,
  registerUserFailure,
  registerUserSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethods";
import { clearCart } from "./cartRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
export const register = async (user, dispatch) => {
  dispatch(registerUserStart());
  try{
    const res = await publicRequest.post("/auth/register", user);
       dispatch(registerUserSuccess(res.data))
  }catch (err){
         dispatch(registerUserFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logOut());
};

export const productClear = async (dispatch) => {
  dispatch(clearCart());
};
