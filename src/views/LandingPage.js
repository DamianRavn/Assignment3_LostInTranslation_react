import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, createUser, setUserName } from "../features/user.js";
import InputAsyncCallComponent from "../Components/InputAsyncCallComponent.js";

const handleUserClick = (dispatch, username)=>
{
    dispatch(fetchUser(username));
}

function LandingPage(props)
{
    const dispatch = useDispatch();
    let content

    const userStatus = useSelector(state => state.user.value.status);
    const username = useSelector(state => state.user.value.username);
    const error = useSelector(state => state.user.value.error);

    if (!username) 
    {
        content = <InputAsyncCallComponent clickHandler = {handleUserClick} placeholder = "Input Username here" />    
    }
    if (userStatus === 'loading') 
    {
        content = <div>Loading...</div>
    } 
    else if(userStatus === 'newUser')
    {
        dispatch(createUser(username));
    }
    else if (userStatus === 'sucess') 
    {
        content = <div>Sucess!</div>
    } 
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
            {content}
            </div>
        </div>
        </>
    );
}

export default LandingPage;