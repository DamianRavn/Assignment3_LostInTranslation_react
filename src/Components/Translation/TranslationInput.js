export default function TranslationInput() {
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
                    <button className="mt-3">Translate!</button>
                </div>
            </div>
        </>
    );
}
