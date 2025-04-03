import React, { useEffect, useState, useReducer } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: "1",
      username: "johndoe",
      first_name: "John",
      last_name: "Doe",
      age: 30,
      email: "john@doe.com",
      phone: "123-456-7890",
    },
    {
      id: "2",
      username: "janedoe",
      first_name: "Jane",
      last_name: "Doe",
      age: 28,
      email: "jane@doe.com",
      phone: "234-567-8901",
    },
    {
      id: "3",
      username: "mikesmith",
      first_name: "Mike",
      last_name: "Smith",
      occupation: "Product Manager",
      age: 35,
      date_of_birth: "1988-07-10",
      email: "mike@smith.com",
      phone: "345-678-9012",
    },
  ]);
  const [loading, setLoading] = useState(false);

  // ADD USER
  // DELETE USER
  // UPDATE USER

  useEffect(() => {
    // fetch("http://localhost:3000/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setUsers(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching users:", error);
    //     setLoading(false);
    //   });
  }, []);

  if (loading) {
    return <div>Loading users, please wait...</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
