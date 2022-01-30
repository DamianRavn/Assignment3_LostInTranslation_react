import { React } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user.js";

function LandingPage(props)
{
    const dispatch = useDispatch();
    return(
        <div>Home</div>
    );
}

export default LandingPage;