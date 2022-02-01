import { React } from "react";
import { fetchUser, setUserName } from "../features/user.js";
import InputAsyncCallComponent from "../Components/InputAsyncCallComponent.js";
import { useNavigate } from 'react-router-dom';

function LandingPage(props) {

    const handleUserClick = (dispatch, username) => {
        dispatch(setUserName(username));
        dispatch(fetchUser(username));
        navigate('/translation');
    }
    
    const navigate = useNavigate();
    return (
        <>
            <div className="container text-center d-flex align-items-center justify-content-center">
                <div>
                    <h1 className="animate__animated animate__wobble">Welcome to the Translatron!</h1>
                </div>
            </div>
            <div className="containter text-center d-flex align-item-center justify-content-center mt-3">
                <InputAsyncCallComponent clickHandler={handleUserClick} />
            </div>
        </>
    );
}

export default LandingPage;