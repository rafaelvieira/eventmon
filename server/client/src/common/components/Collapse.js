import React from "react";

const Collapse = ( { isOpened, closedMessage, children } ) => {

    return isOpened ? 
        [<div key="collapse_opened" style={{ display: isOpened ? "block" : "none" }}>{ children }</div>] :
        [<div key="collapse_closed" style={{ display: isOpened ? "none" : "block" }}>
            { closedMessage ? closedMessage : "Click to show" }
        </div>];
}

export default Collapse;