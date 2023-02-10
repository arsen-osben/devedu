import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Post from './Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
//const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const ANAKIN_IMAGE = "https://cdn.oboi7.com/8f9299115b9c81f77c4df6a24aaabfe1e5c942d7/zvezdnye-vojny-dzhedaj-anakin-skajuoker-aktery-hajden-kristensen.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

root.render(
  <React.StrictMode>
    <Post 
      author={
        {
          name: "Anakin skywalker",
          photo: ANAKIN_IMAGE,
          nickname: "@dart_vader"
        }
      }
      content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
      image={RAY_IMAGE}
      date={"26 февр."}
    />
  </React.StrictMode>
);
