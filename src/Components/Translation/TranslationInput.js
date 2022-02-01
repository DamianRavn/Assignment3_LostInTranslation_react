import { useState } from "react";

export default function TranslationInput() {

    const [input, setInput] = useState("");
    const handleOnClick = () => {

    }

    return (
        <>
            <div className="container text-center d-flex align-items-center justify-content-center">
                <h1>Translatron</h1>
            </div>
            <div className="container text-center d-flex align-items-center justify-content-center">
                <div>
                    <div>
                        <label htmlFor="translateText">Enter the text to translate here:</label>
                    </div>
                    <div>
                        <input type="text" placeholder="Type here..."></input>
                    </div>
                    <button className="mt-3" onClick={handleOnClick}>Translate!</button>
                </div>
            </div>
        </>
    );
}
