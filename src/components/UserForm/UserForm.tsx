import React, {useState} from 'react';
import {ROLES} from "../../constants";


const UserForm:React.FC = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    isActive: false,
    role: 'user',
  })

  const changeIsActive = (e: React.ChangeEvent<HTMLInputElement> | HTMLSelectElement) => {
    const { name, value, type, checked } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  return (
    <div>
      <form>
        <h4>Add new user</h4>
        <div className="form-users">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
          />
        </div>
        <div className="form-users">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
          />
        </div>
        <div className="form-users">
          <label htmlFor="isActive">isActive</label><br/>
          <input
            type="text"
            name="isActive"
            id="isActive"
            checked={user.isActive}
            className="form-check-input"
            onChange={changeIsActive}
          />
        </div>
        <div className="form-users">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            className="form-select"
            value={user.role}
            onChange={changeIsActive}
          >
            {ROLES.map(role =>   (
              <option key={role.value} value={role.value}>{role.value}</option>
              ))}
        </select>
        </div>

        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default UserForm;