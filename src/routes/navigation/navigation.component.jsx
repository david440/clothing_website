import { Fragment, useContext } from "react";
import { Outlet,Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../contexts/user.context";

const Navigation = () => {
  //In the navigation, we want the currentUser value, not the setter. 
  const { currentUser  } = useContext(UserContext);


  return(
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          {/* If currentUser is not null then show SIGN OUT else SIGN IN */}
          {
            currentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
              ) : (
                <Link className='nav-link' to='/auth'>
                  SIGN IN
                </Link>)
          }
        </div>
      </div>
      <Outlet/>
    </Fragment>

  )
}

export default Navigation;