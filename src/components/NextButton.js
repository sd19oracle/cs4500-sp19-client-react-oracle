import React from "react";

export default props => {

    let renderNextBtn = null;
    if (props.current_page === props.page_num) {
        renderNextBtn = (
            <button className='next-button' onClick={props.next_button_click} disabled="disabled">
                <span id="btnNext"> Next </span>
            </button>
        );
    } else {
        renderNextBtn = (
            <button className='next-button' onClick={props.next_button_click} disabled={props.next_button_state}>
                <span id="btnNext"> Next </span>
            </button>
        );
    }

    return renderNextBtn;
}