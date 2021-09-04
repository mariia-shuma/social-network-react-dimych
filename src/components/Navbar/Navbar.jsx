import { NavLink } from 'react-router-dom';
import  classes from './Navbar.module.css';

function Navbar() {
    return <nav className= {classes.nav}>
    <div className={classes.item}>
      <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
    </div>
    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/dialogues" activeClassName={classes.activeLink}>Messages</NavLink>
    </div>
    <div className={classes.item}>
      <NavLink to="/news" activeClassName={classes.activeLink}>News</NavLink>
    </div>

    <div className={`${classes.item} ${classes.active}`}>
      <NavLink to="/users" activeClassName={classes.activeLink}>Users</NavLink>
    </div>

    <div className={classes.item}>
      <a>Music</a>
    </div>
    <div className={classes.item}>
      <a>Settingss</a>
    </div>
  </nav>
}
 
export default Navbar;