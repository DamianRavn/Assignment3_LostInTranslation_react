import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from "react-router-dom";
import { updateTranslation } from "../../features/user.js";

const Translation = (props) => {
    const user = useSelector(state => state.user.value);

    const [translation, setTranslation] = useState("");
    const [translatedSentence, setTrancelatedSentence] = useState([]);
    const dispatch = useDispatch();
    const imageSource = "assets/images/signs/";

    if (!user.username) 
    {
        return <Navigate to='/' />
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleTranslation(translation);
    }

    const handleTranslation = (sentence) => {
        if (translatedSentence.length > 0) {
            translatedSentence.length = 0;
        }
        sentence = sentence.toString().trim().toLowerCase();
        //Send to api to store translation
        let userObj = {...user, newTranslation: sentence};
        dispatch(updateTranslation(userObj));

        let translatedLetter = '';
        sentence.toString().toLowerCase();
        for (let index = 0; index < sentence.length; index++) {
            if (/([a-z])/g) {
                if (sentence.charAt(index) === " ") { 
                    translatedLetter = "blank.png"; 
                } else {
                    translatedLetter = sentence.charAt(index) + '.png';
                }
            }
            translatedSentence.push({ "id": index, "src": imageSource, "letter": translatedLetter });
            setTrancelatedSentence([...translatedSentence]);

        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="translation">Sentence you would like to translate</label>
                <input
                    id="translation"
                    type="text"
                    placeholder="Enter sentence..."
                    className="form-control"
                    onChange={(event) => setTranslation(event.target.value)}
                />

                <button
                    type="submit"
                    className="btn btn-success btn-lg"
                    >
                    Translate
                </button>
            </form>
            <div>
                {translatedSentence.map((letter) => {
                    return <img className='handsigns' key={letter.id} src={letter.src + letter.letter} />
                })}
            </div>
        </>
    )

}

export default Translation;