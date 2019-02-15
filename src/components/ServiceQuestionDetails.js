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
}

export default ServiceQuestionDetails