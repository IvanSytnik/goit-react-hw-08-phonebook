import { useDispatch, useSelector } from "react-redux"
import { getUserName } from "redux/AuthOperation/auth.selector"
import { logOut } from "../../redux/AuthOperation/authOperation";
import Button  from '@mui/material/Button';


const UserMenu = () => {
    const dispatch = useDispatch();
    const userName = useSelector(getUserName);

    return (
    <div style={{margin: "30px 0"}}>
    <p>{`Hello,  ${userName}`}</p>
    <Button variant="contained" style={{width: "100px"}}type="button"
    onClick={() => dispatch(logOut())}>Log out</Button>
        </div>
        
    )
}
export default UserMenu;
