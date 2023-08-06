export const Item = () => {
    

    return (
        <div className="item-grid">
            <div className="left-side">
                <img className="item-image" src="https://rellery.com/cdn/shop/products/13_52d64c3f-adaf-42b6-b6f5-0e46a5139e56_360x.jpg?v=1682440221" alt="Item Name" />
                <div className="rating">
                    Rating:
                    <span className="rating-stars">★★★★★</span>
                </div>
            </div>
            <div className="right-side">
                <div className="item-name">Product Name</div>
                <div className="item-description">Product Description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam feugiat nulla a semper consectetur.</div>
                <div className="item-price">$99.99</div>
                <button className="add-to-cart-btn">Add to Cart</button>
            </div>
        </div>

    )
}