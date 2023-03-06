import NavBar from '../nav-bar/nav-bar';
import style from './header.module.css';

const Header = () => (
    <header className={style.main}>
        <span>Demo Redux</span>
        <NavBar className={style.menu} />
    </header>
)


export default Header;