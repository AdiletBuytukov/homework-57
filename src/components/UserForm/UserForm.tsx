import React, { useState } from 'react';
import { ROLES } from "../../constants";

interface User {
  name: string;
  email: string;
  isActive: boolean;
  role: string;
}

interface UserFormProps {
  addUser: (user: User) => void;
}

const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    isActive: true,
    role: 'user',
  });

  const changeIsActive = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(user);
    setUser({
      name: '',
      email: '',
      isActive: false,
      role: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add new user</h4>
        <div className="form-users">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control mb-2"
            value={user.name}
            onChange={changeIsActive}
          />
        </div>
        <div className="form-users">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control mb-2"
            value={user.email}
            onChange={changeIsActive}
          />
        </div>
        <div className="form-users">
          <label htmlFor="isActive">isActive</label><br />
          <input
            type="checkbox"
            name="isActive"
            id="isActive"
            checked={user.isActive}
            className="form-check-input mb-2"
            onChange={changeIsActive}
          />
        </div>
        <div className="form-users">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            className="form-select mb-2"
            value={user.role}
            onChange={changeIsActive}
          >
            {ROLES.map(role => (
              <option key={role.value} value={role.value}>{role.value}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-2">Add user</button>
      </form>
    </div>
  );
};

export default UserForm;