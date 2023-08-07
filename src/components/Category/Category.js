import { Link } from "react-router-dom"


export const Category = () => {

    return (
        <div className="main-category">
            <ul className="window-container">
                <Link to='/menu/bracelets' className="window-one"><li>Bracelets</li></Link>
                <Link to='/menu/necklaces' className="window-two"><li>Necklaces</li></Link>
                <Link to='/menu/rings' className="window-three"><li>Rings</li></Link>
            </ul>
        </div>
    )
}