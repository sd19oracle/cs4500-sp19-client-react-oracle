import serviceQuestions from '../data/serviceQuestions.mock'

global.fetch = jest.fn()
    .mockImplementation((url, config) => {
        if (!config) {

        } else if (config.method === 'post') {

        } else if (config.method === 'put') {

        } else if (config.method === 'delete') {

        }
    });


