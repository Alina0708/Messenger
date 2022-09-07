import "./App.css";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import NavMenu from "./components/NavMenu/NavMenu";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Films from "./components/Films/Films";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BackgroundColomns from "./components/BackgroundColomns/BackgroundColomns";
import { connect } from "react-redux";

//hello 
const App = (props) => {
  return (
    
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <BackgroundColomns />
        <NavMenu />
        <div className="content">
          <Routes>
            <Route path="/" element={<Profile postsData={props.postsData} />} />
            <Route
              path="/Messages"
              element={
                <Messages
                  dialogsData={props.dialogsData}
                  messagesData={props.messagesData}
                  newMessageText={props.newMessageText}
                />
              }
            />
            <Route
              path="/Profile"
              element={
                <Profile
                  postsData={props.postsData}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Films" element={<Films/>}/>
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
        <div className="cat2"></div>
      </div>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  const { postsData } = state.posts;
  const { messagesData, dialogsData, newMessageText } = state.messages;
  return {
    postsData,
    messagesData,
    dialogsData,
    newMessageText,
  };
};
export default connect(mapStateToProps)(App);
