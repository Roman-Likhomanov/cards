import {NavLink} from 'react-router-dom';
import style from './Header.module.css'

const Header = () => {
    return <nav className={style.navBox}>
        <NavLink to="/">Main</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/registration">Registration</NavLink>
        <NavLink to="/recovery-pass">Recovery Pass</NavLink>
        <NavLink to="/set-pass">Set Pass</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/error-404">Error 404</NavLink>
        <NavLink to="/test">Test</NavLink>
</nav>

}

export default Header