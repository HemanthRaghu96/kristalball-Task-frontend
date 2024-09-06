# kristalball Task Frontend 

React Setup:
Use Create React App (npx create vite@latest) and install necessary packages (react-router-dom, \
axios, bootstrap, redux, react-redux, @reduxjs/toolkit).

Components:\
Signup Component:
A form where users can input their registration details (username, password, etc.).\
On form submission, send a POST request to the /users/signup route.

Login Component:
A form for users to input their login credentials (username and password).\
On form submission, send a POST request to the /users/login route, and store the received JWT in localStorage.

Profile Component:
Display user details (age, gender, DOB, contact, etc.) fetched from the /users/users route.\
Include a form to update user details and send a PUT request to /users/:usersId.

Routing:
Use react-router-dom to handle navigation between the Signup, Login, and Profile pages.\
Implement private routes that require authentication to access.

State Management:\
Redux Toolkit:
Create a slice for user authentication and profile data.\
Use actions to handle login, logout, and profile updates.\
Store the JWT token and user profile data in the Redux store.

Form Handling:
Use Bootstrap for styling forms and ensure responsiveness.\
Implement form validation and error handling.\
Use Axios for making HTTP requests to the backend.

Authentication:
Store and manage JWT in localStorage and include it in the headers of requests to protected routes.\
Implement a method to check if a user is authenticated and redirect them accordingly.

API Integration:
Configure Axios with the base URL of your backend API.\
Make sure to handle responses and errors from API calls appropriately.

This setup ensures a structured and responsive frontend that integrates smoothly with your backend for authentication and profile management.

Frontend Server link : https://kristalballuserinfo.netlify.app/ \
API documentation : https://documenter.getpostman.com/view/32014275/2sAXjQ3qZz

This project is open scorce, 🚀 Give a Star ⭐️ & Fork to this project ... Happy coding! 🤩
