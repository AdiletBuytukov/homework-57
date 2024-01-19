import React, {useState} from 'react';
import Users from "./components/Users/Users";
import UserForm from "./components/UserForm/UserForm";
import './App.css';



const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const addUser = (newUser: User) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  return (
    <>
      <main className="container-fluid">
        <div className="row">
          <div className="col-6">
            <UserForm addUser={addUser}/>
          </div>
          <div className="col-6">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;