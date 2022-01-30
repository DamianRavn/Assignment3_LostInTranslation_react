import { React } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../features/user.js";

function Profile(props)
{
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Profile</h1>
            <h5>User: {user.name}</h5>
            <p>Translations: {user.translations}</p>

            <div>
                <button onClick=
                {
                    ()=>
                    {
                        dispatch(logout());
                    }
                }
                >Logout</button>
            </div>
        </div>
    );
}

export default Profile;
