function Post(props) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__header__ava">
          <img src={props.author.photo} alt="" />
        </div>
        <div className="post__header__name">{props.author.name}</div>
        <div className="post__header__nickname">{props.author.nickname}</div>
        <div className="post__header__date">{props.date}</div>
      </div>
      <div className="post__content">
        <div className="post__content__text">{props.content}</div>
        <div className="post__content__media"><img src={props.image} alt="{props.content}" /></div>
      </div>
    </div>
  );
}

export default Post;
