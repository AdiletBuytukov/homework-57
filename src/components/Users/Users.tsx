import React from 'react';

interface User {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

interface UsersProps {
  users: User[]
}

const Users:React.FC<UsersProps> = ({ users }) => {
  return (
    <div>
      <h4>List of users</h4>
      {users.map((user, index) => (
        <div key={index}>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>IsActive: {user.isActive && 'true' || 'false'}</p>
          <p>Role: {user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;