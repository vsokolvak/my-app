import classes from './Body.module.css'
import React from 'react';
import Profile from './Profile/Profile';
import Messages from './Messages/Messages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import Setting from './Setting/Setting';

const Body = () => {
  return (
    <main>
        <Routes>
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/messages" element={<Messages />}></Route>

          <Route path="/News" element={<News />}></Route>

          <Route path="/Music" element={<Music />}></Route>

          <Route path="/Setting" element={<Setting />}></Route>
        </Routes>
    </main>
  );
}

export default Body;
