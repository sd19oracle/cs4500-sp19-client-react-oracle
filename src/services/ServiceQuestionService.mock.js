import serviceQuestions from '../data/serviceQuestions.mock'

global.fetch = jest.fn()
    .mockImplementation((url, config) => {
        console.log("Run mock service");
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

        } else if (config.method === 'put') {

        } else if (config.method === 'delete') {

        }
    });




