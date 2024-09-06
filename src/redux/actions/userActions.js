import axios from 'axios';
import { api } from '../../api/api';

export const  loginUser = (email, password) => async (dispatch) => {
  try {
    const loginData = { email, password };
    const response = await axios.post(`${api}/users/login`, loginData);
    
    localStorage.setItem('login', 'true');
    localStorage.setItem('email', email);
    localStorage.setItem('token', response.data.token);

    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const signupUser = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/users/signup`, formData);
    dispatch({ type: 'SIGNUP_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'SIGNUP_FAILURE', payload: error.message });
  }
};

export const fetchUserProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const storedEmail = localStorage.getItem('email')
    const response = await axios.get(`${api}/users/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userProfile = response.data.find(user => user.email === storedEmail);

if (userProfile) {
  dispatch({ type: 'FETCH_PROFILE_SUCCESS', payload: userProfile });
} else {
  dispatch({ type: 'FETCH_PROFILE_FAILURE', payload: 'User profile not found' });
}
  } catch (error) {
    dispatch({ type: 'FETCH_PROFILE_FAILURE', payload: error.message });
  }
};

export const updateUserProfile = (id, updatedData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.put(`${api}/users/${id}`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({ type: 'UPDATE_PROFILE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_PROFILE_FAILURE', payload: error.message });
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('login');
  dispatch({ type: 'LOGOUT' });
};
