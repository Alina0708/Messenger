import "./App.css";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import NavMenu from "./components/NavMenu/NavMenu";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavMenu />
        <div className="content">
        <Routes>
                 <Route path="/Messages" element= {<Messages/>}/>
                 <Route path="/Profile" element={<Profile/>}/>
      </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
