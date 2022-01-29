import { React } from "react";
import { NavLink } from "react-router-dom";

function NotFound(props)
{
    return(
        <main className="App">
            <h1>Wait, what are you doing here? This is a closed set!!</h1>
            <img src="https://translatepages.com/wp-content/uploads/2020/07/cant-tell-if-bad-grammar-or-google-translate-fail.jpg" alt="A meme, to signify a 404 error!"/>
            <br/>
            <h4><NavLink to="/">Fine, take me back!</NavLink></h4>
        </main>
    );
}

export default NotFound;
