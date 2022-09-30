import axios from "axios";
import {
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_REQUEST,
  ACTIVATE_ERROR,
  ACTIVATE_SUCCESS,
  SIGNIN_FAIL,
  SIGNIN_SUCCESS,
  SIGNIN_REQUEST,
  USER_FAIL,
  USER_SUCCESS,
  USER_REQUEST,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  REFRESH_FAIL,
  REFRESH_SUCCESS,
} from "../constants/auth";
export const check_authenticated = () => async (dispatch) => {
    if (localStorage.getItem('access')){
        const config = {
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        }

        const body = JSON.stringify({
            token: localStorage.getItem('access')
        })

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
            if (res.status === 200){
                dispatch({
                    type: AUTHENTICATED_SUCCESS
                })
            }else {
                dispatch({
                    type: AUTHENTICATED_FAIL
                })
            }
        } catch (error) {
            dispatch({
                type: AUTHENTICATED_FAIL,
                payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            })
        }
    }
}

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: SIGNIN_REQUEST,
  });

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    email,
    password,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );

    if (res.status === 200) {
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: res.data,
      });
      dispatch(getCurrenteUser());
    } else {
      dispatch({
        type: SIGNIN_FAIL,
        payload: res.status,
      });
    }
  } catch (error) {
    dispatch({
      type: SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const signup =
  (first_name, last_name, email, password, re_password) => async (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      re_password,
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/`,
        body,
        config
      );

      if (res.status === 201) {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
      } else {
        dispatch({
          type: SIGNUP_FAIL,
          payload: res.status,
        });
      }
    } catch (error) {
      dispatch({
        type: SIGNUP_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const activate = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    uid,
    token,
  });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
      body,
      config
    );

    if (res.status === 204) {
      dispatch({
        type: ACTIVATE_SUCCESS,
        /* no payload need it because it doesnt return anything */
      });
    } else {
      dispatch({
        type: ACTIVATE_ERROR,
      });
    }
  } catch (error) {
    dispatch({
      type: ACTIVATE_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const refresh = () => async (dispatch) => {
    if (localStorage.getItem('refresh')){
        const config = {
            headers: {
                'Accept': 'application/json',
                "Content-Type": "application/json",
            }
        }

        const body = JSON.stringify({
            refresh: localStorage.getItem('refresh')
        })

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/refresh/`, body, config)
            if (res.status === 200){
                dispatch({
                    type: REFRESH_SUCCESS,
                    payload: res.data
                })
            }else {
                dispatch({
                    type: REFRESH_FAIL
                })
            }
        } catch (error) {
            dispatch({
                type: REFRESH_FAIL,
                payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            })
        }
    }
}

export const getCurrenteUser = () => async (dispatch) => {
    if (localStorage.getItem('access')){
        dispatch({
            type: USER_REQUEST,
          });
        
          const token = localStorage.getItem("access");
        
          const config = {
            headers: {
              Authorization: "JWT " + token,
            },
          };
        
          try {
            const res = await axios.get(
              `${process.env.REACT_APP_API_URL}/auth/users/me/`,
              config
            );
        
            if (res.status === 200) {
              dispatch({
                type: USER_SUCCESS,
                payload: res.data,
              });
            } else {
              dispatch({
                type: USER_FAIL,
                payload: res.status,
              });
            }
          } catch (error) {
            dispatch({
              type: USER_FAIL,
              payload:
                error.response && error.response.data.message
                  ? error.response.data.message
                  : error.message,
            });
          }
        };
    }
  
