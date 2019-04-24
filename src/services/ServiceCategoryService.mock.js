import service_categories_page0 from "../data/service-categories-page0.mock";

global.fetch = jest.fn()
    .mockImplementation((url, config) => { 
        if (config) { 
            if (config.method === "delete") {
                return Promise.resolve();
            }
            else if (config.method === "put") { 
                const body = JSON.parse(config.body);
                return Promise.resolve({json: () => body})
            }
        }
    })