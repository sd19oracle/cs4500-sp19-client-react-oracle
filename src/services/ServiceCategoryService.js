export default class ServiceCategoryService {
    static urlPrefix = null;
    static hostname = null;
    static instance = null;

    static getInstance() {
        if (ServiceCategoryService.instance === null) {
            ServiceCategoryService.instance = new ServiceCategoryService()
        }

        this.hostname = window.location.hostname;
        if (this.hostname === "localhost") {
            this.urlPrefix = "http://localhost:8080";
        } else {
            this.urlPrefix = "https://cs4500-sp19-oracle.herokuapp.com"
        }
        return this.instance;
    }

    getServiceCategoryById(id) {
        fetch(ServiceCategoryService.urlPrefix + `/api/categories/${id}`)
            .then(response => {
                console.log(response.json())
                response.clone().json()
            })
    }

    getAllServiceCategories = () =>
        fetch(ServiceCategoryService.urlPrefix + "/api/categories")
            .then(response => response.json())

    getPageOfServiceCategories = (pageNum, ipp) =>
        fetch(ServiceCategoryService.urlPrefix + `/api/categories/paged?pageNum=${pageNum}&ipp=${ipp}`)
            .then(response => response.json())
    
    findServiceCategoryById = categoryId =>
        fetch('http://localhost:8080/api/service-categories/${categoryId}')
            .then(response => response.json())

    findAllServiceCategories = () =>
        fetch("http://localhost:8080/api/service-categories")
            .then(response => response.json())
    
    deleteServiceCategoryById = id => 
        fetch(ServiceCategoryService.urlPrefix + `/api/categories/${id}`, { method: "delete" })
    
    async createServiceCategory(serviceCategory) { 
        delete serviceCategory.id;
        return fetch(ServiceCategoryService.urlPrefix + `/api/categories/`, {
            method: "post",
            body: JSON.stringify(serviceCategory),
            headers: {"content-type": "application/json"}
        })
        .then(response => response.json())
    }

    async updateServiceCategory(serviceCategory) { 
        fetch(ServiceCategoryService.urlPrefix + `/api/categories/${serviceCategory.id}`, {
            method: "put",
            body: JSON.stringify(serviceCategory),
            headers: {
                "content-type": "application/json"
            }
        }).then(response => { 
            response.clone().json();
        })
    }
}