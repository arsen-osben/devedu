import routePic from './../img/route.jpg'

const Home = () => {
    return (
        <div className="container">
            <h1>Hi, this is main page</h1>
            <div className="pic"><img src={routePic} alt=""/></div>
        </div>
    );
};

export default Home;
