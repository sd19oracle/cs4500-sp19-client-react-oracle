import React from 'react'
import ServiceAnswerService from '../services/ServiceAnswerService'

class ServiceAnswerDetails extends React.Component {
    constructor(props) {
        super(props)
        this.serviceAnswerService = ServiceAnswerService.getInstance()
        this.state = {
            serviceAnswers: [],
            serviceAnswer: {
                choiceAnswer: '',
                id: 1
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

    
}