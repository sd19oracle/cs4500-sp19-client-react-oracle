import React from "react";

export default props => {

    const pageNumbers = [];
    for (let i = 1; i <= (props.page_num); i++) {
        pageNumbers.push(i);
    }

    let buttons = pageNumbers.map(num => {
        if (num === (props.current_page)) {
            return <button className={num + '-button'} key={num} id={num} style={{ backgroundColor: "#69adfc", opacity: 0.8 }}
                onClick={props.handleClick}>{num}</button>;
        } else {
            return <button className={num + '-button'} key={num} id={num} onClick={props.handleClick}>{num}</button>;
        }
    });


    return buttons;
};