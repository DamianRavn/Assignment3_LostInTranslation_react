import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/user.js";
import { createSelector } from 'reselect'

function Profile() {
    const selectTranslations = createSelector(
        (state) => state.user,
        (translations) => translations.filter((translation) => !translation.deleted)
    )
    const username = useSelector((state) => state.user.value.username);
    const translations = useSelector(selectTranslations);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div className="container text-center d-flex align-items-center justify-content-center">
            <div>
                <h1>Profile</h1>
                <h5>User: {username}</h5>
                <p>Translations: {translations}</p>
                <div>
                    <div>
                        <h1>Profile</h1>
                    </div>
                    <div>
                        <h5>User: {username}</h5>
                    </div>
                    <div>
                        <p>Translations: {username.translations}</p>
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
        </div>
    );
}

export default Profile;
