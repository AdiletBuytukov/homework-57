import Users from "./components/Users/Users";
import UserForm from "./components/UserForm/UserForm";
import './App';

const App = () => {

  return (
    <>
      <main className="container-fluid">
        <div className="row">
          <div className="col-6">
            <UserForm/>
          </div>
          <div className="col-6">
            <Users/>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
