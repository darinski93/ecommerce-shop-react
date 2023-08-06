import { Link } from "react-router-dom"


export const Category = () => {

    return (
        <div className="main-category">
            <ul className="window-container">
                <Link to='/category-bracelets' className="window-one"><li>Bracelets</li></Link>
                <Link to='/category-necklaces' className="window-two"><li>Necklaces</li></Link>
                <Link to='/category-rings' className="window-three"><li>Rings</li></Link>
            </ul>
        </div>
    )
}