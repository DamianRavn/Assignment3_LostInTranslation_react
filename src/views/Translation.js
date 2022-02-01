import { React } from "react";
import InputAsyncCallComponent from "../Components/InputAsyncCallComponent";
import { addUserTranslation } from '../features/user'

function Translation(props)
{
    const handleUserClick = (dispatch, translation) => {
        dispatch(addUserTranslation(translation));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return(
        //<div>
        //<InputAsyncCallComponent />
        //</div>

        <form onSubmit={handleSubmit}>
            <h1>I'm here to help!</h1>

            <label htmlFor="translation">Sentence you would like to translate</label>
            <input id="translation" type="text" placeholder="Enter sentence..." className="form-control" />

            <button type="submit" className="btn btn-success btn-lg">Translate</button> 
        </form>
    );
}

export default Translation;
