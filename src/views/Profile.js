import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/user.js";

function Profile() {
    const username = useSelector((state) => state.user.value.username);

    //Only show 10 translations, so we filter by deletion and count
    const translations = useSelector((state) => state.user.value.translations);
    const filteredTranslations = translations.filter((record, index)=> !record.deleted && index < 10);
    //Cant display an obejct as easily as we can an array
    const displayTranslations = filteredTranslations.map((translation)=> translation.translation + ' \n');
    const dispatch = useDispatch();

    const handleClick = ()=>
    {
        dispatch()

    }
    return (
        <div>
            <h1>Profile</h1>
            <h5>User: {username}</h5>
            <h5>Translations:</h5>
            <pre>{displayTranslations}</pre>

            <div>
                <button onClick=
                    {
                        handleClick
                    }
                >delete</button>
            </div>
        </div>
    );
}

export default Profile;
