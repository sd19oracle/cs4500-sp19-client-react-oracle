class ServiceAnswerService {
    static instance = null;
    static getInstance() {
        if (ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        return this.instance
    }

    findAllServiceSpecificAnswers = () =>
        fetch('http://localhost:8080/api/servicesSpecificAnswers')
            .then(response => response.json())

    findOneAnswer = id =>
        fetch('http://localhost:8080/api/servicesSpecificAnswers/{answerID}')
            .then(response => response.json())
}

export default ServiceAnswerService