export default class ServiceQuestionService {
    static instance = null;
    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        return this.instance
    }
    findServiceQuestionById = id =>
        fetch(`http://localhost:8080/api/servicesSpecificQuestions/${id}`)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch("https://cs4500-sp19-client-oracle.herokuapp.com/api/servicesSpecificQuestions")
            .then(response => response.json())
}