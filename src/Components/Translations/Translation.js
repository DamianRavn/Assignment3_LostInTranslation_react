import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';

const Translation = (props) => {
    const [translation, setTranslation] = useState("");
    const [translatedSentence, setTrancelatedSentence] = useState([]);
    const tempTranslatedSentence = [];
    const imageSource = "assets/images/signs/";

    const handleSubmit = (event) => {
        event.preventDefault();
        handleTranslation(translation)
    }

    const handleTranslation = (sentence) => {
        if (translatedSentence.length > 0) {
            translatedSentence.length = 0;
        }
        sentence = sentence.toString().trim().toLowerCase();
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
            tempTranslatedSentence.push({ "id": index, "src": imageSource, "letter": translatedLetter }); 
        }
        setTrancelatedSentence(translatedSentence=> [...translatedSentence, tempTranslatedSentence]);
        console.log(translatedSentence); 

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