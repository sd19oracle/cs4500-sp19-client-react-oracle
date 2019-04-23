import URLPrefix from "./URLPrefix";
import * as qs from "query-string";

export default class ServiceCategoryService {
    static instance = null;

    static getInstance() {
        if (ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }
        return this.instance;
    }

    constructor() {
        this.urlPrefix = URLPrefix.getInstance().urlPrefix;
    }

    findServiceCategoryById(id) {
        fetch(this.urlPrefix + `/api/categories/${id}`)
            .then(response => response.json())
    }

    filterServiceCategories(nameFilter) {
        let queryString = "";
        if (nameFilter) queryString = "?" + qs.stringify({nameFilter});
        return fetch(this.urlPrefix + "/api/categories/filtered" + queryString)
          .then(response => response.json());
    }

    findAllServiceCategories = () =>
        fetch(this.urlPrefix + "/api/categories")
            .then(response => {
                console.log(response)
                return response.json()
            });

    findPageOfServiceCategories = (pageNum, ipp) =>
        fetch(this.urlPrefix + `/api/categories/paged?pageNum=${pageNum}&ipp=${ipp}`)
            .then(response => response.json());

    deleteServiceCategoryById = id =>
        fetch(this.urlPrefix + `/api/categories/${id}`, { method: "delete" });

    async createServiceCategory(serviceCategory) {
        delete serviceCategory.id;
        return fetch(this.urlPrefix + `/api/categories/`, {
            method: "post",
            body: JSON.stringify(serviceCategory),
            headers: {"content-type": "application/json"}
        })
        .then(response => response.json())
    }

    async updateServiceCategory(serviceCategory) {
        var resp = await fetch(this.urlPrefix + `/api/categories/${serviceCategory.id}`, {
            method: "put",
            body: JSON.stringify(serviceCategory),
            headers: {
                "content-type": "application/json"
            }
        })
        return resp.json()
    }

    findServiceCategoryPaged(pageIdx, perPage) { 
        return fetch(this.urlPrefix + `/api/categories/paged?pageNum=${pageIdx}&ipp=${perPage}`)
        .then(response => response.json())
    }
}
