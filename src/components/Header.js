import {Link} from 'react-router-dom'

function Header(props){
    return(
        <Link to="/">
        <div className='header'>
            <h1>Project Repo</h1>
        </div>
        </Link>
    )
}

export default Header