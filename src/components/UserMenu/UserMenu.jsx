import { useDispatch, useSelector } from "react-redux"
import { getUserName } from "redux/AuthOperation/auth.selector"
import { logOut } from "../../redux/AuthOperation/authOperation";


const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(getUserName);

    return (
    <div>
    <p>{`Hello  ${userName}`}</p>
    <button type="button"
    onClick={() => dispatch(logOut())}>Log out</button>
        </div>
        
    )
}
export default UserMenu;
