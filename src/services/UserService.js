import URLPrefix from "./URLPrefix";
import HttpError from "./HttpError";

export default class UserService {
  static instance = null;

  static getInstance() {
    if (UserService.instance === null) {
      UserService.instance = new UserService()
    }
    return this.instance;
  }

  constructor() {
    this.urlPrefix = URLPrefix.getInstance().urlPrefix;
  }

  findUserById(userId) {
    return fetch(this.urlPrefix + `/api/users/${userId}`)
      .then(response => response.json());
  }

  findAllUsers() {
    return fetch(this.urlPrefix + "/api/users")
      .then(response => response.json());
  }

  createUser(user) {
    return fetch(this.urlPrefix + "/api/users", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new HttpError(response);
      }
      return response.json();
    });
  }

  login(email, password) {
    return fetch(this.urlPrefix + "/api/login", {
      body: JSON.stringify({email, password}),
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (!response.ok) {
        throw new HttpError(response);
      }
      return response.json();
    });
  }

  logout() {
    return fetch(this.urlPrefix + "/api/logout", {
      credentials: "include",
      method: "POST",
    });
  }

  getCurrentUser() {
    return fetch(this.urlPrefix + "/api/currentUser", {
      credentials: "include"
    }).then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new HttpError(response);
      }
    }).then(response => {
      return response.json();
    }).catch(error => {
      return {};
    });
  }

  updateUser(user) {
    return fetch(this.urlPrefix + `/api/users/${user.id}`,
    {
      body: JSON.stringify(user),
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new HttpError(response);
      }
    });
  }
}
