import React from "react";
import renderer from "react-test-renderer";
import faas from "../data/frequently_asked_answers.mock";
import FAQAnswers from "../components/FAQAnswers";
import {MemoryRouter, Route, StaticRouter} from "react-router-dom";

test("should render the faq answers", () => {
  const component = renderer.create(
    <MemoryRouter>
      <FAQAnswers faqAnswers={faas}/>
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  let root = component.root;
  expect(root.findAllByType("a").length).toBe(4);
  expect(root.findAllByType("td").length).toBe(20);
});

test("renders the answers given", () => {
  const component = renderer.create(
    <MemoryRouter>
      <FAQAnswers faqAnswers={faas.slice(1)}/>
    </MemoryRouter>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  let root = component.root;
  expect(root.findAllByType("a").length).toBe(3);
  expect(root.findAllByType("td").length).toBe(16);
});
