import "./App.css";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import NavMenu from "./components/NavMenu/NavMenu";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music"
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = (props) => {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavMenu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile postsData={props.state.myPostPage.postsData}/>} />
            <Route path="/Messages" element={<Messages dialogsData={props.state.messagesPage.dialogsData} messagesData={props.state.messagesPage.messagesData} />} />
            <Route path="/Profile" element={<Profile postsData={props.state.myPostPage.postsData} />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
