import React, { useState } from "react";

import "./form.style.css";
import { useNavigate } from "react-router-dom";

const MyForm = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    first_name: "",
    last_name: "",
    occupation: "",
    age: 0,
    date_of_birth: "",
    email: "",
    password: "",
    confirm_password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    const newState = {
      [id]: value,
    };

    console.log(newState);

    setUserInfo((prevState) => ({ ...prevState, ...newState }));
  };

  const areInputsvalid = () => {
    const {
      first_name,
      last_name,
      email,
      occupation,
      age,
      date_of_birth,
      phone,
      password,
      confirm_password,
    } = userInfo;

    if (
      !first_name ||
      !last_name ||
      !email ||
      !occupation ||
      !age ||
      !date_of_birth ||
      !phone
    ) {
      alert("Please fill in all fields");
      return false;
    }

    if (password !== confirm_password) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const valid = areInputsvalid();

    if (!valid) {
      return;
    }

    // Here you can handle the form submission, e.g., send data to an API
    // For demonstration, we'll just log the userInfo to the console

    const {
      first_name,
      last_name,
      email,
      occupation,
      age,
      date_of_birth,
      phone,
      password,
    } = userInfo;

    alert(`${first_name} ${last_name} ${email}`);

    console.log(
      `First Name: ${first_name}, Last Name: ${last_name}, Email: ${email}, Occupation: ${occupation}, Age: ${age}, Date of Birth: ${date_of_birth}, Phone: ${phone}, Password: ${password}`
    );

    // Reset the form
    setUserInfo({
      username: "",
      first_name: "",
      last_name: "",
      occupation: "",
      age: 0,
      date_of_birth: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
    });

    const apiUrl = "http://localhost:3000/users";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        alert("User registered successfully!");
        navigate("/success");
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error registering user. Please try again.");
      });
  };

  return (
    <div className="form">
      <h1>Register for our Services</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={userInfo.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            value={userInfo.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            value={userInfo.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <input
            type="text"
            id="occupation"
            value={userInfo.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={userInfo.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="date_of_birth">Date of Birth</label>
          <input
            type="date"
            id="date_of_birth"
            value={userInfo.date_of_birth}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={userInfo.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={userInfo.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            value={userInfo.confirm_password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            value={userInfo.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;
