import faas from "../data/frequently_asked_answers.mock";
import URLPrefix from "./URLPrefix";

global.fetch = jest.fn()
  .mockImplementation((url, config) => {

    if (!config) {
      // then it must be a get
      const byIdMatch = url.match(/.*\/faq-answers\/(\d+)/);
      const allMatch = url.match(/.*\/faq-answers/);
      if (byIdMatch.length) {
        return Promise.resolve({json: () => faas[byIdMatch[1]]});
      } else if (allMatch.length) {
        return Promise.resolve({json: () => faas})
      }

    } else if (config.method === "delete") {
      return Promise.resolve();
    } else if (config.method === "put") {
      const body = JSON.parse(config.body);
      return Promise.resolve({json: () => body});
    }
  });
