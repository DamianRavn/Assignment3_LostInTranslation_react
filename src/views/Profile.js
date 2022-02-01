import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../features/user.js";

function Profile() {
    const username = useSelector((state) => state.user.value.username);

    //Only show 10 translations, so we filter by deletion and count
    const translations = useSelector((state) => state.user.value.translations);
    const filteredTranslations = translations.filter((record, index)=> !record.deleted && index < 10);
    //Cant display an obejct as easily as we can an array
    const displayTranslations = filteredTranslations.map((translation)=> translation.translation + ' \n');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const onClick = ()=>
    {
        console.log("click")
    }
    return (
        <div className="container text-center d-flex align-items-center justify-content-center">
            <div>
                <h1>Profile</h1>
                <h5>User: {username}</h5>
                <p>Translations: {translations}</p>
                <div>
                    <div>
                        <button onClick=
                            {
                                onClick
                            }
                        >delete</button>
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
