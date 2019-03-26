import React from 'react'
export default props => {
    const tableContainer = props.serviceQuestions
        .map(serviceQuestion =>
            <tr className={serviceQuestion.id + '-tr'} key={serviceQuestion.id} value={serviceQuestion.id}>
                <td onClick={(e) => {
                    props.navToDetail(serviceQuestion.id)
                }}>{serviceQuestion.title}</td>
                <td onClick={(e) => {
                    props.navToDetail(serviceQuestion.id)
                }}>{serviceQuestion.type}</td>
                <td onClick={(e) => {
                    props.navToDetail(serviceQuestion.id)
                }}>{serviceQuestion.choice}</td>

                <td>
                    <button style={{
                        background: "rgb(237,43,63)",
                        color: "white",
                        textAlign: "center",
                        paddingLeft: "13px",
                        paddingRight: "13px",
                        marginLeft: "5px",
                        marginRight: "5px",
                    }}
                        onClick={() => props.remove(serviceQuestion.id)}>Delete
                        </button>
                    <button style={{
                        background: "rgb(83,189,248)",
                        color: "white",
                        textAlign: "center",
                        paddingLeft: "13px",
                        paddingRight: "13px",
                        marginLeft: "5px",
                        marginRight: "5px",
                    }}
                        onClick={() => props.selectQuestion(serviceQuestion.id)}>Select
                        </button>

                </td>

            </tr>
        )
    return tableContainer;
}