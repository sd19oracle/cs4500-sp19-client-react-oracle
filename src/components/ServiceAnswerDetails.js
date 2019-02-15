import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'
class ServiceAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: [],
            serviceAnswer: {
                id: 1,
                answer: ''

            }
        }
    }
    componentDidMount() {
        this.serviceAnswerService
            .findAllServiceSpecificAnswers()
            .then(serviceAnswers => {
                    this.props.history.push("/admin/service-answers/" + serviceAnswers[0].id)
                    this.setState({
                        serviceAnswers: serviceAnswers,
                        serviceAnswer: serviceAnswers[0]
                    })
                }
            )
    }
    selectServiceAnswer = id =>
        this.serviceAnswerService
            .findOneAnswer(id)
            .then(serviceAnswer => {
                    this.props.history.push("/admin/service-answers/" + id)
                    this.setState({
                        serviceAnswer: serviceAnswer
                    })
                }
            )
    render() {
        return(
            <div>
                <h3>Service Answer Details</h3>
                <select
                    value={this.state.serviceAnswer.id}
                    onChange={e => {this.selectServiceAnswer(e.target.value)}}
                    className="form-control">
                    {
                        this.state.serviceAnswers
                            .map(serviceAnswer =>
                                <option
                                    value={serviceAnswer.id}
                                    key={serviceAnswer.id}>
                                    {serviceAnswer.id}) {serviceAnswer.answer}
                                </option>
                            )
                    }
                </select>
                <label>Service Answer Answer</label><br/>
                <input
                    onChange={() => {}}
                    className="form-control"
                    value={this.state.serviceAnswer.answer}/>
            </div>
        )
    }
}

export default ServiceAnswerDetails