import URLPrefix from "./URLPrefix";

export default class FAQService {
  static instance = null;

  static getInstance() {
    if (FAQService.instance === null) {
      FAQService.instance = new FAQService()
    }
    return this.instance;
  }

  constructor() {
    this.urlPrefix = URLPrefix.getInstance().urlPrefix;
  }

  findFAQById(id) {
    return fetch(`${this.urlPrefix}/api/faqs/${id}`)
      .then(response => response.json());
  }

  findAllFAQs() {
    return fetch(`${this.urlPrefix}/api/faqs`)
      .then(response => response.json());
  }

  findFAQsPaged(count, page) {
    return fetch(`${this.urlPrefix}/api/faqs/paged?count=${count}&page=${page}`)
      .then(response => response.json());
  }

  addAnswer(id) {
    return fetch(`${this.urlPrefix}/api/faqs/${id}/addAnswer`, {
      method: "post",
      body: JSON.stringify({answer: "New FAQ Answer"}),
      headers: {"Content-Type": "application/json"}
    }).then(response => response.json());
  }
}
