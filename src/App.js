import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = () => {
  return (
      <BrowserRouter>
          <div className={'wrapper'}>
              <Header />

              <Navigation />

              <div className={'content-wrapper'}>
                  <Route path="/profile"
                         render={ () =>
                             <ProfileContainer />}
                  />
                  <Route path="/messages"
                         render={ () =>
                             <Messages />}
                  />
                  <Route path="/news"
                         render={ () =>
                             <News />}
                  />
                  <Route path="/music"
                         render={ () =>
                             <Music />}
                  />
                  <Route path="/users"
                         render={ () =>
                             <UsersContainer />}
                  />
                  <Route path="/settings"
                         render={ () =>
                             <Settings />}
                  />
              </div>
          </div>
      </BrowserRouter>

  );
}

export default App;
