const initialState = {
  user: null,
  error: null,
  loading: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, user: action.payload, error: null };
    case 'LOGIN_FAILURE':
      return { ...state, error: action.payload };
    case 'SIGNUP_SUCCESS':
      return { ...state, user: action.payload, error: null };
    case 'SIGNUP_FAILURE':
      return { ...state, error: action.payload };
    case 'FETCH_PROFILE_SUCCESS':
      return { ...state, user: action.payload, error: null };
    case 'FETCH_PROFILE_FAILURE':
      return { ...state, error: action.payload };
    case 'UPDATE_PROFILE_SUCCESS':
      return { ...state, user: action.payload, error: null };
    case 'UPDATE_PROFILE_FAILURE':
      return { ...state, error: action.payload };
    case 'LOGOUT':
      return { ...state, user: null, error: null };
    default:
      return state;
  }
}
