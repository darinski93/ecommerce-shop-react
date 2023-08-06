const brandImages = [
    './img/photo_1.jpg',
    './img/photo_2.jpg',
    './img/photo_3.jpg',
    './img/photo_4.jpg',
    './img/photo_5.jpg',
    './img/photo_6.jpg',
    './img/photo_7.jpg',
];

export const Home = () => {
    return (
        <div className="home">
            <h1 className="heading">Welcome to Jey Jey Store!</h1>
            <p className="subheading">Discover top brands in our store:</p>
            <div className="brand-images">
                {brandImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Brand ${index + 1}`}
                        className="brandImage"
                    />
                ))}
            </div>
        </div>
    );
};