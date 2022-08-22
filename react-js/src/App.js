import './App.css';
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import Chats from './pages/Chats';
import {Routes, Route} from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    background: {
      paper: '#EFEAAC',
    },
    primary: {
        main: red[400],
    },
  },
});
function App() {
  return (   
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route exact index element={<Home theme={theme}/>}/>
          <Route exact path={'/Chats'} element={<Chats theme={theme}/>}/>
          <Route exact path={'/Profile'} element={<Profile theme={theme}/>}/>
          <Route exact path={'*'} element={<ErrorPage theme={theme}/>}/>
        </Route>
      </Routes> 
  );
}

export default App;