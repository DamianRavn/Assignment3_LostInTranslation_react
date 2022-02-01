import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';

const Translation = (props) => {
    const [translation, setTranslation] = useState("");
    const [translatedSentence, setTrancelatedSentence] = useState([]);
    const dispatch = useDispatch();
    const imageSource = "assets/images/signs/";
    //const translatedSentence = [];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(translation);
        handleTranslation(translation);
    }

    const handleTranslation = (sentence) => {
        let translatedLetter = '';
        sentence.toString().toLowerCase();
        for (let index = 0; index < sentence.length; index++) {
            if (/([a-z])/g) {
                translatedLetter = sentence.charAt(index) + '.png';
            }

            translatedSentence.push({ "id": index, "src": imageSource, "letter": translatedLetter });
            //setTrancelatedSentence(translatedSentence => [...translatedSentence, imageSource + translatedLetter]);

            //translatedSentence.push(imageSource + translatedLetter);
            setTrancelatedSentence(translatedSentence);
            //translatedSentence.push(translatedLetter)
        }

        console.log(translatedSentence);
        // for(const [value] of translatedSentence.entries()) {
        //    images.push(<img src={imageSource + value} alt=" "/>)
        // }
        // console.log("[Images]", images);
        // console.log("[Src's]", translatedSentence);
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
                    /* onClick={() => handleSubmit(dispatch, translation)} */>
                    Translate
                </button>
            </form>
            <div>
                {/* {translatedSentence.map((letter) => {
                    return <p key={letter.id}>{letter.src + letter.letter}</p>;
                    })} */}
                {/* {translatedSentence[0].letter + translatedSentence[0].src} */}
                {translatedSentence.map((letter) => {
                    return <img className='handsigns' key={letter.id} src={letter.src + letter.letter} />
                })}
            </div>
        </>
    )

}

export default Translation;