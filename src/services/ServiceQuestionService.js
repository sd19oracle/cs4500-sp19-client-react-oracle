export default class ServiceQuestionService {
    static instance = null;
    static hostname = null
    static urlPrefix = null
    static getInstance() {
        if(ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
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
    findServiceQuestionById = id =>
        fetch(ServiceQuestionService.urlPrefix + `api/servicesSpecificQuestions/${id}`)
            .then(response => response.json())
    findAllServiceQuestions = () =>
        fetch(ServiceQuestionService.urlPrefix + "api/servicesSpecificQuestions")
            .then(response => response.json())
    findServiceQuestionsByFilter = filter => {
        delete filter.id;
        return fetch(ServiceQuestionService.urlPrefix + "api/servicesSpecificQuestions", {
            method: 'post',
            body: JSON.stringify(filter),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }
}
