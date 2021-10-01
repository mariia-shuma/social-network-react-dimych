import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MyFriends from '../MyFriends/MyFriends';
import  classes from './Navbar.module.css';

function Navbar(props) {
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
      <a>Settings</a>
    </div>
    <MyFriends list={props.friendList} />
  </nav>
}

// let mapStateToprops = (state) => {
//   return {
//       friendList: state.listOfFriends
//   }
// }
// let mapDispatchToProps = (dispatch) => {

// }

// const Navbar = connect(mapStateToprops, mapDispatchToProps)(Navbar);

export default Navbar;
