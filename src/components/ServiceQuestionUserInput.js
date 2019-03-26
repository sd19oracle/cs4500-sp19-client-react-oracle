import React from 'react';
import AddServiceQuestionButton from './AddServiceQuestionButton';
import UpdateServiceQuestionButton from './UpdateServiceQuestionButton';

export default props => (
    <tr>
        <td>
            <input
                type="text"
                name="title"
                className="title-input"
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
            <AddServiceQuestionButton 
            createQuestion = {props.createQuestion} />
            <UpdateServiceQuestionButton 
            updateQuestion = {props.updateQuestion} />
        </td>       
    </tr>
)