import React, { useState } from "react";

const MyForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email) {
      alert("Please fill all the fields");
      return;
    }

    console.log(firstName, lastName, email);
    alert(`${firstName} ${lastName} ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>My Form</h2>
      <input
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
        type="text"
        placeholder="First Name"
        name="firstName"
        required
      />
      <input
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
        type="text"
        placeholder="Last Name"
        name="lastName"
        required
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        placeholder="Email"
        name="email"
        required
      />
      <br />
      <input
        type="submit"
        onClick={() => console.log("Email")}
        value="Submit"
      />

      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
    </form>
  );
};

export default MyForm;
