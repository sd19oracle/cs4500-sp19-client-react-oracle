import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'

class ServiceAnswers extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: []
        }
    }

    // after the component is loaded, loadCategories in all service answers
    // via the service client - ServiceAnswerService
    componentDidMount() {
        this.serviceAnswerService
            .findAllServiceSpecificAnswers()
            .then(serviceAnswers =>
                this.setState({
                    serviceAnswers: serviceAnswers
                }))
    }

    render() {
        return (
            <div>
                <h3>Service Answers</h3>
                <table className="table">
                    <tbody>
                    {
                        this.state.serviceAnswers
                            .map(serviceAnswer =>
                                <tr key={serviceAnswer.id}>
                                    <td>{serviceAnswer.answer}</td>
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ServiceAnswers
