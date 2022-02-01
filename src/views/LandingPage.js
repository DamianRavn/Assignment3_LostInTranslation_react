import { React } from "react";
import { fetchUser, setUserName } from "../features/user.js";
import InputAsyncCallComponent from "../Components/InputAsyncCallComponent.js"

const handleUserClick = (dispatch, username)=>
{
    dispatch(setUserName(username));
    dispatch(fetchUser(username));
}

function LandingPage(props)
{
    return(
        <div>
            <div>Home</div>
            <InputAsyncCallComponent clickHandler = {handleUserClick} placeholder = "Input Username here" />
        </div>
    );
}

export default LandingPage;