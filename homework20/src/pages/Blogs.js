import Post from '../components/Post';

const ANAKIN_IMAGE = "https://cdn.oboi7.com/8f9299115b9c81f77c4df6a24aaabfe1e5c942d7/zvezdnye-vojny-dzhedaj-anakin-skajuoker-aktery-hajden-kristensen.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";

const Blogs = () => {
    return (
        <div className="container">
            <h1>Blog</h1>
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
        </div>
    );
};

export default Blogs;
