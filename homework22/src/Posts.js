import {useSelector} from "react-redux";
import React from 'react';

function Posts() {
    const postList = useSelector(state => state.post);
    const newItem = postList.map(function(item, i)  {
        return (
            <div className="post" key={item.date}>
                <div className="post__header">
                    <div className="post__header__ava">
                        <img src={item.authorPhoto} alt="" />
                    </div>
                    <div className="post__header__name">{item.author}</div>
                    <div className="post__header__nickname">{item.nickname}</div>
                    <div className="post__header__date">{item.date}</div>
                </div>
                <div className="post__content">
                    <div className="post__content__text">{item.textPost}</div>
                    <div className="post__content__media"><img src={item.picPost} alt="" /></div>
                    <div className="post-meta">
                        <div className="post-likes">{item.nLikes}</div>
                        <div className="post-comments">{item.nComments}</div>
                        <div className="post-repost">{item.nReposts}</div>
                    </div>
                </div>
            </div>
        )
    });
    //console.log(newItem);
    return(
        <div className="post-list">
            {newItem}
        </div>
    )
}
export default Posts;
