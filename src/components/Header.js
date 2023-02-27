import {Link} from 'react-router-dom'

function Header(props){
    return(
        <Link to="/">
        <div>
            <h1>CodeProject</h1>
        </div>
        </Link>
    )
}

export default Header