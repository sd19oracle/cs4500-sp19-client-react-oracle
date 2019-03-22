import React from "react";

export default props => {

    let renderNextBtn = null;
    if (props.current_page === props.total_pages) {
        renderNextBtn = (
            <button className={props.next_button_state} onClick={props.next_button_click} disabled="disabled">
                <span id="btnNext"> Next </span>
            </button>
        );
    } else {
        renderNextBtn = (
            <button className={props.next_button_state} onClick={props.next_button_click} disabled={props.next_button_state}>
                <span id="btnNext"> Next </span>
            </button>
        );
    }

    return renderNextBtn;
}