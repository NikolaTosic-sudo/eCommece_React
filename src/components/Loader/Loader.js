import React from 'react'
import './Loader.css'
import WithClass from "../../hoc/withClass";


const Loader = () => {

    // Loader when there is nothing to show
        return(
            <WithClass classes="loader-container">
                <div className="loader">
                    <div className="inner one"/>
                    <div className="inner two"/>
                    <div className="inner three"/>
                </div>
            </WithClass>
        );
    };

export default Loader