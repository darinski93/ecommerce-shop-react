import { Link } from "react-router-dom"

export const Header = () => {

    return (
        <nav>
            <img className="logo" src="./img/JeyJey.png" alt="Logo" />
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/category'>Category</Link></li>
            </ul>
        </nav>
    )
}