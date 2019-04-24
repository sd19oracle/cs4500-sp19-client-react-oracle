import service_categories_page0 from "../data/service-categories-page0.mock";
import service_categories_page1 from "../data/service-categories-page1.mock";

global.fetch = jest.fn()
    .mockImplementation((url, config) => { 
        if (config) {
            if (config.method === "delete") {
                return Promise.resolve();
            }
            else if (config.method === "put") {
                const body = JSON.parse(config.body);
                return Promise.resolve({ json: () => body })
            }
        }
        else if (!config) { 
            const paged = url.match(/.*\/categories\/paged\?pageNum=(\d+)&ipp=(\d+)/);
            if (paged.length || paged[1] === 0) {
                return Promise.resolve({ json: () => service_categories_page0 })
            } else if (paged.length || paged[1] === 1) {
                return Promise.resolve({json: () => service_categories_page1})
            }
        }
    })