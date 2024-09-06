import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../api/api';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // To handle navigation to the update page

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const response = await axios.get(`${api}/users/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const userData = response.data.find((user) => user.email === email);
      setUser(userData);
    
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleUpdateClick = (id) => {
    navigate(`/profile/${id}`); // Navigate to the update profile page
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('login');
    navigate('/'); // Navigate to home page after logging out
  };

  return (
    <div className="d-flex flex-column align-items-center min-vh-100">
      {/* Logout button */}
      <div className="w-100 d-flex justify-content-end p-3">
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {user ? (
        <div className="card shadow-sm w-100 mt-4" style={{ maxWidth: '300px' }}>
          <div className="card-body">
            <h2 className="card-title h5">User Details</h2>
            <div className="mb-2">
              <span className="fw-bold">User Name:</span>
              <span className="ms-2">{user.userName}</span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">Email:</span>
              <span className="ms-2">{user.email}</span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">Mobile:</span>
              <span className="ms-2">{user.mobile}</span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">Age:</span>
              <span className="ms-2">{user.age}</span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">Gender:</span>
              <span className="ms-2">{user.gender}</span>
            </div>
            <div className="mb-2">
              <span className="fw-bold">DOB:</span>
              <span className="ms-2">{user.dob}</span>
            </div>
            <button 
              className="btn btn-primary w-100 mt-3" 
              onClick={() => handleUpdateClick(user._id)}
            >
              Update Profile
            </button>
          </div>
        </div>
      ) : (
        <div className="text-muted">No user found</div>
      )}
    </div>
  );
};

export default Profile;
