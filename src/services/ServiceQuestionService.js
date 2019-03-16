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
    findServiceQuestionById(id) {
        fetch(ServiceQuestionService.urlPrefix + `api/servicesSpecificQuestions/${id}`)
            .then(response => {
                console.log(response.json())
                response.clone().json()})
    }

    findAllServiceQuestions = () =>
        fetch(ServiceQuestionService.urlPrefix + "api/servicesSpecificQuestions")
            .then(response => response.json())

    async removeById(id) {
        await fetch(ServiceQuestionService.urlPrefix + `api/servicesSpecificQuestions/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
    }

    async createQuestion(question) {
        delete question.id
        console.log('I HAVE BEEN HERE')
        console.log(ServiceQuestionService.urlPrefix + `api/servicesSpecificQuestions/`)
        return fetch(ServiceQuestionService.urlPrefix + `api/servicesSpecificQuestions/`, {
            method: 'post',
            body: JSON.stringify(question),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
    }

    async updateQuestion(question) {
        fetch(ServiceQuestionService.urlPrefix + `api/servicesSpecificQuestions/${question.id}`, {
            method: 'put',
            body: JSON.stringify(question),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            console.log(response.clone().json())
            response.clone().json()})
        }
}
