const LOGIN_SUCCESS = "authentication/LOGIN_SUCCESS";
const LOGOUT = "authentication/LOGOUT";

const initState = {
  authenticate: false
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticate: true
      };

    case LOGOUT:
      return {
        ...state,
        authenticate: false
      };

    default:
      return state;
      break;
  }
}

export function authenticate(email = "", password = "") {
  return {
    type: LOGIN_SUCCESS
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
