import clsx from 'clsx';
import { Link } from 'react-router-dom';
import style from './nav-bar.module.css';

const NavBar = ({ className }) => (
    <nav className={clsx(style.nav, className)}>
        <ul>
            <li>
                <Link to=''>Accueil</Link>
            </li>
            <li>
                <Link to='people'>Personnes</Link>
            </li>
            <li>
                <Link to='todo'>Todo App</Link>
            </li>
            <li>
                <Link to='about'>A propos</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar;