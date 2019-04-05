export default class UserService {
    static instance = null;
    static urlPrefix = null;
    static hostname = null;

    static getInstance() {
        if (UserService.instance === null) {
            UserService.instance = new UserService()
        }

        this.hostname = window.location.hostname;
        if (this.hostname === "localhost") {
            this.urlPrefix = "http://localhost:8080";
        } else {
            this.urlPrefix = "https://cs4500-sp19-oracle.herokuapp.com"
        }
        return this.instance;
    }


    findUserById = userId =>
        fetch(`http://localhost:8080/api/users/${userId}`)
            .then(response => response.json())
    findAllUsers = () =>
        fetch("http://localhost:8080/api/users")
            .then(response => response.json())

    createUser = (data) => {
        console.log(JSON.stringify(data))
        return fetch(UserService.urlPrefix + `/api/users/`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        })
        .then(response => response.json());
        
    }
}