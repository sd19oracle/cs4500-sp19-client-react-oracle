import React from 'react';

export default props => (
    <button className= "add_button"
        style={{
        background: "rgb(49,168,75)",
        color: "white",
        textAlign: "center",
        paddingLeft: "22px",
        paddingRight: "22px",
        marginLeft: "5px",
        marginRight: "5px",
    }}
            onClick={props.createQuestion}>Add
    </button>
)