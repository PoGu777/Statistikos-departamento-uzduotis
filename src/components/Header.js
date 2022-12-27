
import { ReactComponent as Lsd_logo } from '../assets/lsd-logo.svg'
import './Header.css';

function Header() {
    return(
        <div className="header-container">
            <div className="logo-container">
                <Lsd_logo className='lsd-logo' />
            </div>
            <nav className='navbar-container'>
                <ul className='navbar'>
                    <li className='nav'><a href='#info'>Informacija</a></li>
                    <li className='nav'><a href='#reg'>Registracija</a></li>
                    <li className='nav'><a href='#plan'>Programa</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;