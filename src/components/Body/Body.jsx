import classes from './Body.module.css'
import React from 'react';
import Profile from './Profile/Profile';
import MessagesConteiner from './Messages/MessagesConteiner';
import { Route, Routes } from 'react-router-dom';
import News from './News/News';
import Music from './Music/Music';
import Setting from './Setting/Setting';

const Body = (props) => {
  return (
    <main>
      <Routes>
        <Route path="/*" element={<Profile />}/>

        <Route
          path="/messages/*"
          element={<MessagesConteiner />}
        />

        <Route path="/News/*" element={<News />} />

        <Route path="/Music/*" element={<Music />} />

        <Route path="/Setting/*" element={<Setting />} />
      </Routes>
    </main>
  );
}

export default Body;
