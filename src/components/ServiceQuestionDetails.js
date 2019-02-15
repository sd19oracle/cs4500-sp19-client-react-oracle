import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceQuestionDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [],
            serviceQuestion: {
                question: '',
                id: 1
            }
        }
    }

    componentDidMount() {
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions => {
                this.props.history.push("/admin/service-questions/" + serviceQuestions[0].id)
                this.setState({
                    serviceQuestions: serviceQuestions,
                    serviceQuestion: serviceQuestions[0]
                })
            }
            )
    }

    selectServiceQuestion = id =>
        this.serviceQuestionService
            .findServiceQuestionById(id)
            .then(serviceQuestion => {
                this.props.history.push("/admin/service-questions/" + id)
                this.setState({
                    serviceQuestion: serviceQuestion
                })
            }
            )
    render() {
        return (
            <div>
                <h3>Service Question Details</h3>
                <select
                    value={this.state.serviceQuestion.id}
                    onChange={(e) => this.selectServiceQuestion(e.target.value)}
                    className="form-control">
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <option
                                    value={serviceQuestion.id}
                                    key={serviceQuestion.id}>
                                    {serviceQuestion.question}
                                </option>
                            )
                    }
                </select>
                <label>Service Question Question</label><br />
                <input
                    onChange={() => { }}
                    className="form-control"
                    value={this.state.serviceQuestion.question} />
            </div>
        )
    }

}

export default ServiceQuestionDetails