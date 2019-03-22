import React from 'react';

export default props => {

    let renderPrevBtn = null;

    if (props.currentpage === 1) {
        renderPrevBtn = (
            <button className={props.prev_button_state} onClick={props.prev_button_click} disabled="disabled">
                <span id="btnPrev"> Prev </span>
            </button>
        )
    } else {
        renderPrevBtn = (
            <button className={props.prev_button_state} onClick={props.prev_button_click} disabled={props.prev_button_state}>
                <span id="btnPrev"> Prev </span>
            </button>
        )
    }

    return renderPrevBtn;
}