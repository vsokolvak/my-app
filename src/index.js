import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';

console.log(state)

const bll = {
  updatePosts: (userTxt = ' ', userLike = '0', data = state) => {
    const newMessage = {
      txtMessage: userTxt,
      likeCount: userLike || 0
    }

    data.posts.push(newMessage)
    updatePage(state, bll)
  },

  updateInputMessage: (userTXT, data = state) => {
    state.inputMessage = userTXT
    updatePage(state, bll)
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

function updatePage(state, bll) {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} bll={bll} />
      </BrowserRouter>
    </React.StrictMode>
  );
}

updatePage(state, bll)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
