import serviceQuestions from '../data/serviceQuestions.mock'

global.fetch = jest.fn()
    .mockImplementation((url, config) => {
        if (!config) {
            if (url.indexOf('api/servicesSpecificQuestions/0') != -1) {
                return new Promise((resolve, reject) => {
                    resolve({
                        json: function () {
                            return serviceQuestions[0]
                        }
                    })
                })
            } else if (url.includes('api/servicesSpecificQuestions')) {
                return new Promise((resolve, reject) => {
                    resolve({
                        json: function () {
                            return serviceQuestions
                        }
                    })
                })
            }

        } else if (config.method === 'post') {
            let serviceQuestion = JSON.parse(config.body)
            if (url.includes('api/servicesSpecificQuestions/filter')) {
                // this filtering feature is implemented in the backend, it would
                // be reasonable to assume the backend has implemented it correctly.
                // The mock service here won't bother to make filtering fully functional
                // but return a smaller list to validate if the frontend is updated.
                let filterTitle = serviceQuestion.title;
                let filteredQuestions = [];
                for (let i = 0; i < serviceQuestions.length; i++) {
                    if (serviceQuestions[i].title.toLowerCase().indexOf(filterTitle.toLowerCase()) >= 0) {
                        filteredQuestions.push(serviceQuestions[i])
                    }
                }
                return new Promise((resolve, reject) => {
                    resolve({
                        json: function () {
                            return filteredQuestions
                        }
                    })
                })
            }
        } else if (config.method === 'put') {

        } else if (config.method === 'delete') {

        }
    });




