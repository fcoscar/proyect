import {
  ACTIVATE_ERROR,
  ACTIVATE_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST,
  USER_FAIL,
  USER_SUCCESS,
  USER_REQUEST,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  AUTHENTICATED_REQUEST,
  REFRESH_FAIL,
  REFRESH_SUCCESS,
  SIGNOUT_SUCCESS,
  RESET_LINK_SUCCESS,
  RESET_LINK_FAIL,
  RESET_CONFIRMATION_SUCCESS,
  RESET_CONFIRMATION_FAIL,
} from "../constants/auth";

const initialState = {
  access: localStorage.getItem("access"),
  refresh: localStorage.getItem("refresh"),
  isAuthenticated: null,
  user: null,
  loading: false,
};

export const Auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    /* AUTHENTICATED */
    case AUTHENTICATED_REQUEST:
      return {
        ...state,
        loading:true
      }
    case AUTHENTICATED_SUCCESS:
        return {
            ...state,
            isAuthenticated: true,
            loading:false
        }
    case AUTHENTICATED_FAIL:
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        return {
            ...state,
            access: null,
            refresh: null,
            isAuthenticated: false,
            loading:false
        }
    /* REFRESH */
    case REFRESH_SUCCESS:
        localStorage.setItem('access', payload.access);
        localStorage.setItem("refresh", payload.refresh);
        return {
            ...state,
            access: localStorage.getItem('access')
        }       
    case REFRESH_FAIL:
    /* Sign In*/
    case SIGNIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SIGNIN_SUCCESS:
      localStorage.setItem("access", payload.access);
      localStorage.setItem("refresh", payload.refresh);
      return {
        ...state,
        isAuthenticated: true,
        access: localStorage.getItem("access"),
        refresh: localStorage.getItem("refresh"),
        loading: false,
      };
    /* Sign Up*/
    case SIGNUP_REQUEST:
      return {
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        loading: false,
      };
    case SIGNUP_FAIL:
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
        error: payload,
        loading: false,
      };
    /* SIGN OUT */
    case SIGNOUT_SUCCESS:
      localStorage.removeItem('access')
      localStorage.removeItem('refresh')
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        access: null,
        refresh:null
      }
    /* Activation */
    case ACTIVATE_ERROR:
      return {
        ...state,
      };
    case ACTIVATE_SUCCESS:
    /* RESET PASSWORD*/
    case RESET_LINK_SUCCESS:
    case RESET_LINK_FAIL:
    case RESET_CONFIRMATION_SUCCESS:
    case RESET_CONFIRMATION_FAIL:
    /* USER */
    case USER_REQUEST:
        return {
            ...state,
            loading: true
        }
    case USER_SUCCESS:
        return {
            ...state,
            loading: false,
            user: payload
        }
    case USER_FAIL:
        return{
            ...state,
            loading: false
        }

    default:
      return state;
  }
};
