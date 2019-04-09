import URLPrefix from "./URLPrefix";

export default class FAQAnswerService {
  static instance = null;

  static getInstance() {
    if (FAQAnswerService.instance === null) {
      FAQAnswerService.instance = new FAQAnswerService()
    }
    return this.instance
  }

  constructor() {
    this.urlPrefix = URLPrefix.getInstance().urlPrefix;
  }

  findFAQAnswerById(id) {
    return fetch(`${this.urlPrefix}/api/faq-answers/${id}`)
      .then(response => response.json());
  }
  findAllFAQAnswers() {
    return fetch(`${this.urlPrefix}/api/faq-answers`)
      .then(response => response.json());
  }

  updateFAQAnswer(answer) {
    return fetch(`${this.urlPrefix}/api/faq-answers/${answer.id}`, {
      method: "put",
      body: JSON.stringify(answer),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json());
  }

  deleteFAQAnswerById(id) {
    return fetch(`${this.urlPrefix}/api/faq-answers/${id}`, {
      method: "delete"
    })
  }
}
