import React from 'react';
import Home from "../pages/Home";
import "../styles/NotFound.scss";


const NotFound = () => {
    return (
        <div className="Container404">
            <h1 className="error404">
                Not found - error 404.
            </h1>
            <button className="button-home" >Go back</button>
        </div>
    );
};

export default NotFound;