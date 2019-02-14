class ServiceAnswerService {
    static instance = null;
    static hostname = null
    static urlPrefix = null
    static getInstance() {
        if (ServiceAnswerService.instance === null) {
            ServiceAnswerService.instance = new ServiceAnswerService()
        }
        this.hostname = window.location.hostname
        if (this.hostname === "localhost") {
            this.urlPrefix = 'http://localhost:8080/'
        } else {
            this.urlPrefix = 'https://cs4500-sp19-oracle.herokuapp.com/'
        }
        console.log(this.hostname)
        console.log(this.urlPrefix)
        return this.instance
    }

    findAllServiceSpecificAnswers = () =>
        fetch(ServiceAnswerService.urlPrefix + 'api/servicesSpecificAnswers')
            .then(response => response.json())

    findOneAnswer = id =>
        fetch(ServiceAnswerService.urlPrefix + 'api/servicesSpecificAnswers/{id}')
            .then(response => response.json())
}

export default ServiceAnswerService