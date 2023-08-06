import { useEffect, useState } from "react";

export const Menu = ({ dbPath }) => {
    const [items, setItems] = useState([]);
    const [show, setShow] = useState(10);

    useEffect(() => {
        fetch(dbPath)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((error) => console.log(error));
    }, [dbPath]);

    if (!items || items.length === 0) {
        return <div className="loading">Loading...</div>;
    }

    const handleLoadMore = () => {
        setShow((prevShow) => prevShow + 10);
    };

    const handleShowLess = () => {
        setShow(10);
    };

    return (
        <div className="product-grid">

            <div className="sorting-container">
                <button onClick={() => setItems([...items].sort((a, b) => a.name.localeCompare(b.name)))}>A-z</button>
                <button onClick={() => setItems([...items].sort((a, b) => b.name.localeCompare(a.name)))}>Z-a</button>
                <button onClick={() => setItems([...items].sort((a, b) => a.price - b.price))}>Price-low to high</button>
                <button onClick={() => setItems([...items].sort((a, b) => b.price - a.price))}>Price-high to low</button>
            </div>

            <div className="describing">
                {items[0].category} {'\u003e'} {show > items.length ? items.length : show} Products
            </div>

            {items.slice(0, show).map((item, index) => (
                <div className="product-item" key={index} style={{ backgroundImage: `url(${item.image})` }}>
                    <div>{item.name}</div>
                    <p>{item.description}</p>
                    <h4 className="price">${item.price}</h4>
                </div>
            ))}

            <div className="btn-container">
                {show > items.length ? (
                    <button id="load-more-btn" onClick={handleShowLess}>Show Less</button>
                ) : (
                    <button id="load-more-btn" onClick={handleLoadMore}>Load More</button>
                )}
            </div>

        </div>
    )
};

