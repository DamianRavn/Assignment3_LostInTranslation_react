import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux';

const Translation = (props) => {
    const [translation, setTranslation] = useState("");
    const dispatch = useDispatch();
    const imageSource = "../../images/signs/";
    let translatedSentence = [];

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(translation);
        handleTranslation(translation)
    }

    const handleTranslation = (sentence) => {
        let translatedLetter = '';
        translatedSentence = [];
        sentence.toString().toLowerCase();
        for(let index = 0; index < sentence.length; index++) {
            if(/([a-z])/g) {
                translatedLetter = sentence.charAt(index) + '.png';
            }
            translatedSentence.push(<img src={imageSource + translatedLetter[index]} alt=" "/>)
            console.log(translatedSentence);
            //translatedSentence.push(translatedLetter)
        }
        //for(const [value] of translatedSentence.entries()) {
        //    images.push(<img src={imageSource + value} alt=" "/>)
        //}
    }

    const handleImageRender = () => {
        
    }

    return (
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
                onClick={() =>
                    handleSubmit(dispatch, translation)
                }>
                    Translate
            </button>

            <span>
                {translatedSentence}
            </span>
        </form>
    )

}

export default Translation;
        