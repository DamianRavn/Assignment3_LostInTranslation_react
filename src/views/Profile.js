import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, overwriteTranslations } from "../features/user.js";

function Profile() {
    const username = useSelector((state) => state.user.value.username);
    const userID = useSelector((state) => state.user.value.id);

    //Only show 10 translations, so we filter by deletion and count
    const translations = useSelector((state) => state.user.value.translations);
    //Doesnt update when translations are deleted :( and using index here wont work
    const filteredTranslations = translations.filter((record, index)=> !record.deleted && index < 10);
    //Cant display an obejct as easily as we can an array
    const displayTranslations = filteredTranslations.map((translation)=> translation.translation + ' \n');
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const deleteRecords = ()=>
    {
        const updatedTranslation = [];

            let deleted = false;
            for (let i = 0; i < translations.length; i++) 
            {
                for (let j = 0; j < filteredTranslations.length; j++) 
                {
                    if (translations[i].id === filteredTranslations[j].id) 
                    {
                        updatedTranslation.push({id : translations[i].id, translation : translations[i].translation, deleted: true})
                        deleted = true;
                        break;
                    }
                }
                if(!deleted)
                {
                    updatedTranslation.push(translations[i]);
                }
                else
                {
                    deleted = false;
                }
                
            }
        dispatch(overwriteTranslations({id:userID, translations: updatedTranslation}))
    }
    return (
        <div className="container text-center d-flex align-items-center justify-content-center">
            <div>
                <h1>Profile</h1>
                <h5>User: {username}</h5>
                <p>Translations:</p>
                <pre>{displayTranslations}</pre>
                <div>
                    <div>
                        <button onClick=
                            {
                                deleteRecords
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
