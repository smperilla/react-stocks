import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/stocks">Stocks</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Nav;