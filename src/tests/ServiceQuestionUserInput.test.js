import React from "react";
import ServiceQuestionUserInput from "../components/ServiceQuestionUserInput";
import AddServiceQuestionButton from "../components/AddServiceQuestionButton"
import renderer from "react-test-renderer";
import questions from '../data/questions.mock.json'
import Enzyme, { mount, shallow, render } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';


configure({ adapter: new Adapter() });

// DOM test 
it('title input', () => {
  const wrapper = shallow(<ServiceQuestionUserInput question={questions[1]}/>);
  const titleInput = wrapper.find('input').at(0);
  expect(titleInput.props().value).toBe("FOR TEST PURPOSE")
})

// DOM test when we change the content in the input, the change function will be actived
it('update title input', () => {
  const handleChangeSpy = sinon.spy();
  const event = {target: {question : {title : "EDITED"}}};
  const wrapper = mount(<ServiceQuestionUserInput question={questions[2]} handleInputChange={handleChangeSpy}/>);
  const titleInput = wrapper.find('input').at(0);
  titleInput.simulate('change', event);
  expect(handleChangeSpy.calledOnce).toBe(true);
})


// Snapshot test
test("render correct for question 1", () => {
  const tree = renderer
    .create(<ServiceQuestionUserInput question={questions[0]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("render correct for questions 3", () => {
  const tree = renderer
    .create(<ServiceQuestionUserInput question={questions[2]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("render correct for question2 match", () => {
  const tree = renderer
    .create(<ServiceQuestionUserInput question={questions[1]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

// Snapshot when something change  
test("when change in snapshot", () => {
  let changeHandle = () => {
    const testRenderer = renderer
      .create(<ServiceQuestionUserInput question={questions[0]} handleInputChange={changeHandle}/>)
    const tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  }
  const testRenderer = renderer
    .create(<ServiceQuestionUserInput question={questions[1]} handleInputChange={changeHandle}/>)
  const tree = testRenderer.toJSON();
  expect(tree).toMatchSnapshot();
  const testInstance = testRenderer.root;
  const input1 = testInstance.findAllByProps({className : "title-input"})

});

