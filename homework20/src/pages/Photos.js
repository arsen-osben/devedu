import Masonry from 'react-masonry-css';

const Photos = () => {
    return (
        <div className="container">
            <h1>Photos</h1>
            <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                <div className="pic"><img src="https://via.placeholder.com/300.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/280x400.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/300.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/300.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/280.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/280.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/300x320.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/300.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/280.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/300.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/300.png/09f/fff" alt=""/></div>
                <div className="pic"><img src="https://via.placeholder.com/300.png/09f/fff" alt=""/></div>
            </Masonry>
            
        </div>
    );
};

export default Photos;
