import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../api/api";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    mobile: "",
    age: "",
    gender: "",
    dob: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api}/users/signup`, formData);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Signup failed.");
    }
  };
  return (
    <main className="login">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <div className="d-flex justify-content-center align-items-center bg-white rounded mb-4 shadow-lg">
          <div className="d-flex flex-column p-4 bg-white">
            <h1 className="h4 font-weight-bold text-center">Register</h1>
            <p className="text-muted text-center">to access User Data</p>
            
            <input
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              placeholder="User Name"
              className="form-control my-2" 
              required
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email ID"
              className="form-control my-2"
              required
            />
            <input
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Mobile No"
              className="form-control my-2"
              required
            />
          
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="form-control my-2"
            >
            <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
            <input
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="form-control my-2"
              required
            />
             <input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              placeholder="DOB"
              className="form-control my-2"
              required
            />
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="form-control my-2"
              required
            />
            <button
              type="submit"
              className="btn btn-primary w-100 my-2"
              onClick={handleSubmit}
            >
              Register
            </button>
            <p className="text-center my-1">
              Already have an account?{" "}
              <span className="font-weight-bold">
                <Link to={"/login"} className="text-primary">Sign In</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
