import{ Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Layout from "./Layout"
import ProtectedRoutes from "./ProtectedRoutes";
import AddContact from "../pages/AddContact";
import View from "./View";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Layout />}>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route
            path={"/addContact"}
            element={
              <ProtectedRoutes>
                <AddContact />
              </ProtectedRoutes>
            }
          />
          <Route
            path={"/update/:id"}
            element={
              <ProtectedRoutes>
                <AddContact />
              </ProtectedRoutes>
            }
          />
          <Route
            path={"/view/:id"}
            element={
              <ProtectedRoutes>
                <View />
              </ProtectedRoutes>
            }
          />
        <Route path="*" element={<Error/>}/>
      </Route>
    </Routes>
  );
}

export default App;
