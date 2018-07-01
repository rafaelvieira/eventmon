import React from "react";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 

const Collapse = ( { isOpened, closedMessage, children } ) => {

    return(
        <ReactCSSTransitionGroup
            transitionName="react-transition"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={10}>
            {
                isOpened ? 
                    [<div key="collapse_opened" style={{ display: isOpened ? "block" : "none" }}>{ children }</div>] :
                    [<div key="collapse_closed" style={{ display: isOpened ? "none" : "block" }}>
                        { closedMessage ? closedMessage : "Click to show" }
                    </div>]
            }
        </ReactCSSTransitionGroup>
    );
}

export default Collapse;