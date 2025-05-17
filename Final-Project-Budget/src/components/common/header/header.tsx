import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../UI/Button/button';
import "./header.scss"

const Header = () => {
    const navigate = useNavigate();
  return (
    <header className='header-section container'>
        <NavLink className='header-section-logo' to="/" end>
            <h1>Monux</h1>
        </NavLink>
        <nav className='header-section-navbar'>
            <NavLink className='header-section-navbar-link' to="/" end>
                 Home
            </NavLink>
            <NavLink className='header-section-navbar-link' to="/help" end>
                 Help
            </NavLink>
            <NavLink className='header-section-navbar-link' to="/faq">FAQ</NavLink>
            <NavLink className='header-section-navbar-link' to="/blog">Blog</NavLink>
            <NavLink className='header-section-navbar-link' to="/subscription">Subscription</NavLink>
            <Button text='Login' onClick={() => navigate('/login')} variant='blue'/>
        </nav>
    </header>
  )
}

export default Header
