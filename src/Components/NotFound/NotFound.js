import { React } from "react";
import { NavLink } from "react-router-dom";

function NotFound(props) {
    return (
        <div className="container text-center d-flex align-items-center justify-content-center">
            <div className="mt-3">
                <h1>Wait, what are you doing here? This is a closed set!!</h1>
                <div />
                <div className="mt-3">
                    <img src="https://translatepages.com/wp-content/uploads/2020/07/cant-tell-if-bad-grammar-or-google-translate-fail.jpg" alt="A meme, to signify a 404 error!" />
                </div>
                <div className="mt-3">
                    <h3>
                        <NavLink to="/">Fine, take me back!</NavLink>
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
