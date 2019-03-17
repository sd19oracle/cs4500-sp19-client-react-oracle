export default class FAQAnswerService {
	static instance = null;
	static hostname = null;
	static urlprefix = null;

	static getInstance() {
		if(FAQAnswerService.instance === null) {
			FAQAnswerService.instance = new FAQAnswerService()
		}
		this.hostname = window.location.hostname
		if(this.hostname === "localhost") {
			this.urlprefix = 'http://localhost:8080/'
		} else {
			this.urlprefix = 'https://cs4500-sp19-oracle.herokuapp.com/'
		}
		console.log(this.hostname)
		console.log(this.urlprefix)

		return this.instance

	}
	findFAQAnswerById = id =>
		fetch(FAQAnswerService.urlprefix + `api/faq-answers/${id}`)
			.then(response => response.json());
	findAllFAQAnswers = () =>
		fetch(FAQAnswerService.urlprefix + "api/faq-answers")
			.then(response => response.json());
}
