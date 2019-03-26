import First_page from '../data/pagination_first_page.mock.json'
import Second_page from '../data/pagination_second_page.mock.json'
import Empty_page from '../data/pagination_emtpy_page.mock.json'

global.fetch = jest.fn()
    .mockImplementation(url => {
        if (url.includes('api/servicesSpecificQuestions/paged/10/0')) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return First_page;
                    }
                })
            })
        } else if (url.includes('api/servicesSpecificQuestions/paged/10/1')) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return Second_page;
                    }
                })
            })
        } else if (url.includes('api/serviceSpecificQuestions/paded/10/2')) {
            return new Promise((resolve, reject) => {
                resolve({
                    json: function () {
                        return Empty_page;
                    }
                })
            })
        }
    });
