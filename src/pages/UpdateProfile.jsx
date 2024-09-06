import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProfile = () => {
  const [user, setUser] = useState({
    userName: '',
    email: '',
    mobile: '',
    age: '',
    gender: '',
    dob: '',
  });
  const { id } = useParams();
const navigate=useNavigate()
  useEffect(() => {
    // Fetch user data when component mounts
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const storedEmail = localStorage.getItem('email')
    const response = await axios.get(`${api}/users/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const userProfile = response.data.find(user => user.email === storedEmail);
        setUser(userProfile);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleCancel = () => {
    navigate('/profile'); 
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`${api}/users/${id}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.data.message === 'User updated successfully') {
        alert('Profile updated successfully!');
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-sm w-100" style={{ maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="card-title h5">Update Profile</h2>
          <form onSubmit={(e)=>handleUpdate(e)}>
            <div className="mb-3">
              <label className="form-label fw-bold">User Name</label>
              <input
                type="text"
                name="userName"
                value={user.userName}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Mobile</label>
              <input
                type="text"
                name="mobile"
                value={user.mobile}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Age</label>
              <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Gender</label>
              <select
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
                className="form-control"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">DOB</label>
              <input
                type="date"
                name="dob"
                value={user.dob}
                onChange={handleInputChange}
                className="form-control"
              />
            </div>

            <div className="d-flex justify-content-around">
              <button type="submit" className="btn btn-primary w-48">
                Update 
              </button>
              <button
                type="button"
                className="btn btn-danger w-48"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
