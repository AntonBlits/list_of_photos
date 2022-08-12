import { Link } from 'react-router-dom';
import style from "./Navigation.module.css";

export function Navigation() {
   return (
      <nav className={style.nav}>
         <span className={style.logo}>List of photos</span>

         <span>
            <Link to='/'>Photos</Link>
            <Link to='/about'>About</Link>
         </span>
      </nav>
   )
}