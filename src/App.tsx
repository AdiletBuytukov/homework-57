import './App';

const App = () => {

  return (
    <>
      <main className="container-fluid">
        <div className="row mt-4">
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
