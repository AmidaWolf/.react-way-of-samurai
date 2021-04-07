import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App = () => {
  return (
      <BrowserRouter>
          <div className={'wrapper'}>
              <Header />

              <Navigation />

              <div className={'content-wrapper'}>
                  <Route path="/profile"
                         render={ () =>
                             <Profile />}
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
