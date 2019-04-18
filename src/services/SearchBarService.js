export default class ServiceQuestionService {
    static instance = null;
    static hostname = null;
    static urlPrefix = null;

    static getInstance() {
        if (ServiceQuestionService.instance === null) {
            ServiceQuestionService.instance = new ServiceQuestionService()
        }
        this.hostname = window.location.hostname;
        if (this.hostname === "localhost") {
            this.urlPrefix = 'http://localhost:8080/'
        } else {
            this.urlPrefix = 'https://cs4500-sp19-oracle.herokuapp.com/'
        }
        console.log(this.hostname);
        console.log(this.urlPrefix);
        return this.instance
    }

    findProvidersByName(name) {
        fetch(ServiceQuestionService.urlPrefix + `api/users/providers/name/${name}`)
            .then(response => {
                console.log(response.json())
                response.clone().json()
            })
    }

    findProvidersByZip(zip) {
        fetch(ServiceQuestionService.urlPrefix + `api/users/providers/zip/${zip}`)
            .then(response => {
                console.log(response.json())
                response.clone().json()
            })
    }

    findProvidersByNameAndZip(name, zip) {
        fetch(ServiceQuestionService.urlPrefix + `api/users/providers/${name}/${zip}`)
            .then(response => {
                console.log(response.json())
                response.clone().json()
            })
    }
}
