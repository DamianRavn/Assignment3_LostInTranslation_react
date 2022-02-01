import { React } from "react";
import Translation from '../Components/Translations/Translation'
import { addUserTranslation } from '../features/user'

function TranslationPage(props)
{
    const handleUserClick = (dispatch, translation) => {
        dispatch(addUserTranslation(translation));
    }

    return(
        <div>
            <h1>I'm here to help!</h1>
            <Translation clickHandler = {handleUserClick} />
        </div>
    );
}

export default TranslationPage;
