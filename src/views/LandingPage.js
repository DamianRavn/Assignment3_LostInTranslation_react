import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, createUser, setUserName } from "../features/user.js";
import InputAsyncCallComponent from "../Components/InputAsyncCallComponent.js";
import { useNavigate, Navigate } from "react-router-dom";

//Login on click
const handleUserClick = (dispatch, username)=>
{
    dispatch(fetchUser(username));
}

function LandingPage(props)
{
    const dispatch = useDispatch();
    //let navigate = useNavigate();
    //Content can hold whatever html is necessary. The beauty of React
    let content
    //Get state variables
    const userStatus = useSelector(state => state.user.value.status);
    const username = useSelector(state => state.user.value.username);
    const error = useSelector(state => state.user.value.error);

    //If username isn't set to anything, allow login
    if (!username) 
    {
        content = <InputAsyncCallComponent clickHandler = {handleUserClick} placeholder = "Input Username here" />    
    }
    //Show loading div
    if (userStatus === 'loading') 
    {
        content = <div>Loading...</div>
    } 
    //The GET came back empty, make a new user
    else if(userStatus === 'newUser')
    {
        dispatch(createUser(username));
    }
    //Success! user has been found/created, time to go to translation page
    else if (userStatus === 'sucess') 
    {
        //No errors from this, probably the proper way to do it
        return <Navigate to='/translation'/>
        //Was getting an error here, probably bad practice
        //navigate("/translation");
    } 
    //Something went wrong. Error gets displayed
    else if (userStatus === 'failed') 
    {
      content = <div>{error}</div>
    }
    
    return(
        <>
        <div className="container text-center d-flex align-items-center justify-content-center">
            <div>
                <h1 className="animate__animated animate__wobble">Welcome to the Translatron!</h1>
            </div> 
        
            <div className="containter text-center d-flex align-item-center justify-content-center mt-3">
            {
                content
            }
            </div>
        </div>
        </>
    );
}

export default LandingPage;