export default class URLPrefix {
	static instance = null;

	static getInstance() {
		if (URLPrefix.instance === null) {
			URLPrefix.instance = new URLPrefix()
		}

		return URLPrefix.instance;
	}

	constructor() {
		this.urlPrefix
			= window.location.hostname === "localhost"
			? "http://localhost:8080"
			: "https://cs4500-sp19-oracle.herokuapp.com";
	}
}
