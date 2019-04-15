export default class ServiceService {
    static instance = null;
    static hostname = null;
    static urlPrefix = null;

    static getInstance() {
        if (ServiceService.instance === null) {
            ServiceService.instance = new ServiceService()
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

    findServiceById = serviceId =>
        fetch(ServiceService.urlPrefix + `api/services/${serviceId}`)
            .then(response => response.json());
    findAllServices = () =>
        fetch(ServiceService.urlPrefix + "api/services")
            .then(response => response.json());
    // find any number of popular services under one category
    findPopularServicesByCategory = (category_id, size) =>
        fetch(ServiceService.urlPrefix + `api/services/category/${category_id}/limit/${size}`)
            .then(response => response.json());
}
