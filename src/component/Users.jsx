import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define the async function to fetch data
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/v1/customers');
        setUsers(response.data.data); // Assuming your API response has a 'data' field
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchUsers();
  }, []); // Empty dependency array ensures this runs once on mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.email} - {user.fname} {user.lname}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
