import {useDispatch} from "react-redux";
import Posts from "./Posts";

function App() {
  
  const dispatch = useDispatch();
  
  function postAddHandler(e) {
    e.preventDefault();
    const action = {
      type: "ADD_POST"
    };
    dispatch(action);
  }
  
  return (
    <div className="App">
      <form className="form-add-post">
        <input type="text" className="input-add" placeholder='Add post author' id="addAuthor" />        
        <input type="text" className="input-add" placeholder='Add post author nickname' id="addNickname" />        
        <input type="text" className="input-add" placeholder='Add post author photo URL' id="addAuthorPhoto" />        
        <input type="text" className="input-add" placeholder='Add post text' id="addText" />
        <input type="text" className="input-add" placeholder='Add post photo URL' id="addTextPhoto" />
        <input type="text" className="input-add" placeholder='Add post number likes' id="addLikes" />
        <input type="text" className="input-add" placeholder='Add post number comments' id="addComments" />
        <input type="text" className="input-add" placeholder='Add post number reposts' id="addReposts" />
        <button className="btn-post-add" onClick={postAddHandler}>Add Post</button>
      </form>
      <Posts/>
    </div>
  );
}

export default App;
