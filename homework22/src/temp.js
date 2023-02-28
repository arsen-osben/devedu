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
                </div>
