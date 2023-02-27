import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/AuthOperation/auth.selector";
import { Suspense } from "react";
import UserMenu from "components/UserMenu/UserMenu";
import Button  from '@mui/material/Button';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
        <header>
                {isLoggedIn ?<UserMenu/>:
            <>
          <NavLink to="/register"> <Button style={{width: 100, color: "rgba(0, 0, 0, 0.87)", marginRight: "10px"}} variant="contained"> Register</Button></NavLink>
          <NavLink to="/login"><Button  style={{width: 100, color: "rgb(144, 202, 249)",}} variant="outlined"> Login</Button></NavLink>
            </>}
        </header>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        <ToastContainer />
        </>
    )
}
export default Navigation;
