import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/AuthOperation/auth.selector";
import { Suspense } from "react";
import UserMenu from "components/UserMenu/UserMenu";
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return (
        <>
        <header>
                {isLoggedIn ?<UserMenu/>:
            <>
            <NavLink to="/register">Register</NavLink>
            <NavLink to="/login">Login</NavLink>
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
