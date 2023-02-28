/*eslint-env browser*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import Provider from "react-redux/es/components/Provider";

const initState = {
    post: [
        {
            'author': 'Anakin skywalker',
            'authorPhoto': 'https://cdn.oboi7.com/8f9299115b9c81f77c4df6a24aaabfe1e5c942d7/zvezdnye-vojny-dzhedaj-anakin-skajuoker-aktery-hajden-kristensen.jpg',
            'nickname': '@dart_vader',
            'date': "27 февр.",
            'textPost': 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
            'picPost': 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
            'nLikes': 12,
            'nComments': 5,
            'nReposts': 4,
        },
        {
            'author': 'Anakin skywalker',
            'authorPhoto': 'https://cdn.oboi7.com/8f9299115b9c81f77c4df6a24aaabfe1e5c942d7/zvezdnye-vojny-dzhedaj-anakin-skajuoker-aktery-hajden-kristensen.jpg',
            'nickname': '@dart_vader',
            'date': "26 февр.",
            'textPost': 'WTF? Who is Ray? Why she is Skywalker? Luke...?',
            'picPost': 'https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale',
            'nLikes': 12,
            'nComments': 5,
            'nReposts': 4,

        }
    ]
}

const reducer = (state = initState, actions) => {
    switch (actions.type) {
        case "ADD_POST":
            
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            const formattedDate = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
            
            let newText = document.getElementById('addText').value;
            document.getElementById('addText').value = '';
            let author = document.getElementById('addAuthor').value;
            document.getElementById('addAuthor').value = '';
            let nickname = document.getElementById('addNickname').value;
            document.getElementById('addNickname').value = '';
            let authorPhoto = document.getElementById('addAuthorPhoto').value;
            document.getElementById('addAuthorPhoto').value = '';
            let textPhoto = document.getElementById('addTextPhoto').value;
            document.getElementById('addTextPhoto').value = '';
            let likes = document.getElementById('addLikes').value || 0;
            document.getElementById('addLikes').value = '';
            let comments = document.getElementById('addComments').value || 0;
            document.getElementById('addComments').value = '';
            let reposts = document.getElementById('addReposts').value || 0;
            document.getElementById('addReposts').value = '';
            
            return {
            ...state,
            post: [...state.post, {
                'author': author,
                'authorPhoto': authorPhoto,
                'nickname': nickname,
                'date': formattedDate,
                'textPost': newText,
                'picPost': textPhoto,
                'nLikes': likes,
                'nComments': comments,
                'nReposts': reposts,
            }]}
        default:
            return state
    }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
