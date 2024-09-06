import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await dispatch(loginUser(email, password));
      // Check if login was successful by checking the state or localStorage
      if (localStorage.getItem('login') === 'true') {
        navigate('/profile');
      } else {
        // Handle unsuccessful login (e.g., show an error message)
        console.error('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };
  
  return (
    <main className="login">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="d-flex justify-content-center align-items-center bg-white rounded mb-4 shadow-lg">
          <div className="d-flex flex-column p-4 bg-white">
            <h1 className="fs-3 fw-semibold px-2 bg-white">Login in</h1>
            <p className="fs-6 fw-light px-2 bg-white">to access User Data</p>
            <input
              type="text"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control my-2 px-2 py-1 bg-light rounded"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control my-2 px-2 py-1 bg-light rounded"
            />
            {error && (
              <p className="fs-6 fw-bold px-2 text-danger bg-white">
                Invalid email or password
              </p>
            )}
            <button
              className="btn btn-primary w-100 my-2"
              onClick={handleLogin}
            >
              Login
            </button>
            <p className="fs-6 fw-light px-2 my-1 bg-white">
              Don't have an account?{' '}
              <span className="text-primary fw-semibold cursor-pointer bg-white">
                <Link to="/" className="bg-white">Register now</Link>
              </span>
            </p>
            
          </div>
        </div>
      </div>
    </main>
  );
}
