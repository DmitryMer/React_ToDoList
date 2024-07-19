import styles from './Header.module.css';
import logo from "../../assets/logo.svg";

function Header() {
  return <img className={styles.logo} src={logo} alt="логотип" />;
}

export default Header;
