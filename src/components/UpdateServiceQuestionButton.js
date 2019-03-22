import React from 'react';

export default props => (
    <button style={{
        background: "rgb(44,131,232)",
        color: "white",
        textAlign: "center",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginLeft: "5px",
        marginRight: "5px",
    }}
            onClick={props.updateQuestion}>Update
    </button>
);

