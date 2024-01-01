
import './App.css';
import Home from './components/Home';
import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom"
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useUserContext } from './components/Context/UserContext';
import NoteContext from './components/Context/NoteContext';
function App() {
  const {login}=useUserContext();
  return (
    <>
      <BrowserRouter>
      <NoteContext>
            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route exact path='/home' element={login?<Home />:<Login/>} />
              <Route exact path='/signup' element={<SignUp />} />
            </Routes>
            </NoteContext>
      </BrowserRouter>
    </>
  );
}

export default App;
