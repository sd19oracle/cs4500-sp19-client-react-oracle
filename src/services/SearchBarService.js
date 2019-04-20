export default class SearchBarService {
    static instance = null;
    static hostname = null;
    static urlPrefix = null;

    static getInstance() {
        if (SearchBarService.instance === null) {
            SearchBarService.instance = new SearchBarService()
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

    findProvidersByName = name => 
        fetch(SearchBarService.urlPrefix + `api/users/providers/name/${name}`)
            .then(response => response.json())
    

    findProvidersByZip = zip =>
        fetch(SearchBarService.urlPrefix + `api/users/providers/zip/${zip}`)
            .then(response => response.json())

    findProvidersByNameAndZip = (name, zip) =>
        fetch(SearchBarService.urlPrefix + `api/users/providers/${name}/${zip}`)
            .then(response => response.json())
}