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

  findFAQById = id =>
    fetch(`${this.urlPrefix}/api/faqs/${id}`)
      .then(response => response.json());
  findAllFAQs = () =>
    fetch(`${this.urlPrefix}/api/faqs`)
      .then(response => response.json());

  findFAQsPaged(count, page) {
    return fetch(`${this.urlPrefix}/api/faqs/paged?count=${count}&page=${page}`)
      .then(response => response.json());
  }
}
