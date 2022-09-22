import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/usersReducer/usersReducer";


function App() {
  const users = useSelector(state => state.users)
  const loading =  useSelector(state => state.loading)
  const error =  useSelector(state => state.error)
  const dispacth = useDispatch()

  useEffect(()=>{
    dispacth(getUsers())
  },[])

  if (loading){
    return(
      <div>
        Loading...
      </div>
    )
  }

  if (error!= null){
    return(
      <div>
        <h4>Error {error}</h4>
        <button onClick={() => dispacth(getUsers())}>Reload</button>
      </div>
    )
  }

  return (
    <div >
      {users.map((user) => {
        return(
          <div key={user.id}>
          {user.name}
          </div>
        )
      })}
    </div>
  );
}

export default App;
