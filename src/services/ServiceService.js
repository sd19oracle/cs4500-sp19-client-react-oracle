import URLPrefix from "./URLPrefix";
import * as qs from "query-string";

export default class ServiceService {
    static instance = null;

    static getInstance() {
        if (ServiceService.instance === null) {
            ServiceService.instance = new ServiceService()
        }
        return this.instance
    }

    constructor() {
        this.urlPrefix = URLPrefix.getInstance().urlPrefix;
    }

    findServiceById = serviceId =>
        fetch(this.urlPrefix + `/api/services/${serviceId}`)
            .then(response => response.json());
    findAllServices = () =>
        fetch(this.urlPrefix + "/api/services")
            .then(response => response.json());
    // find any number of popular services under one category
    findPopularServicesByCategory = (category_id, size) =>
        fetch(this.urlPrefix + `/api/services/category/${category_id}/limit/${size}`)
            .then(response => response.json());

    filterServicesForCategory(categoryId, nameFilter) {
        let queryString = "";
        if (nameFilter) queryString = "?" + qs.stringify({nameFilter});
        return fetch(this.urlPrefix + `/api/category/${categoryId}/services/filtered` + queryString)
          .then(response => response.json());
    }
}
