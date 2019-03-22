import React from 'react';



export default props => (
    <tr>
        <td>
            <input
                type="text"
                name="title"
                value={props.question.title}
                onChange={props.handleInputChange}
                placeholder="TITLE"/>
        </td>
        <td>
            <select value={props.question.type}
                    name="type" onChange={props.handleInputChange}>
                <option value="MUTIPLECHOICE">MUTIPLECHOICE</option>
                <option value="MINMAX">MINMAX</option>
                <option value="SHORTANSWER">SHORTANSWER</option>
                <option value="TRUEFALSE">TRUEFALSE</option>
                <option value="">ANY</option>
            </select>
        </td>
        <td>
            <input
                type="text"
                name="choice"
                value={props.question.choice}
                onChange={props.handleInputChange}
                placeholder="CHOICE"/>
        </td>
        <td>
            <button style={{
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
        </td>       
    </tr>
)

