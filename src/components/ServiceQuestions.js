import React from 'react'

class ServiceQuestions extends React.Component {
    render() {
        return (
            <div>
                <h3>Service Questions</h3>
                <table className="table">
                    {
                    /* <tbody>
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>{serviceQuestion.question}</td>
                                </tr>
                            )
                    }
                    </tbody> */}
                <h1>Service Questions</h1>
                </table>
            </div>
        )
    }
}

export default ServiceQuestions