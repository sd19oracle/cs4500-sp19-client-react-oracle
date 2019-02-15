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
}

export default ServiceQuestionDetails