import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/user.js";

function Profile() {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="container text-center d-flex align-items-center justify-content-center">
            <div>
                <div>
                    <h1>Profile</h1>
                </div>
                <div>
                    <h5>User: {user.username}</h5>
                </div>
                <div>
                    <p>Translations: {user.translations}</p>
                </div>
                <div>
                    <button onClick=
                        {
                            () => {
                                dispatch(logout());
                                navigate("/");
                            }
                        }
                    >Logout</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;
