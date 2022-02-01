import { useDispatch, useSelector } from "react-redux";
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
    return (
        <div>
            <h1>Profile</h1>
            <h5>User: {username}</h5>
            <p>Translations: {translations}</p>

            <div>
                <button onClick=
                    {
                        () => {
                            dispatch(logout());
                        }
                    }
                >Logout</button>
            </div>
        </div>
    );
}

export default Profile;
