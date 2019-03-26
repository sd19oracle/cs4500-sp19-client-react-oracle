import React from "react";
import ServiceQuestionUserInput from "../components/ServiceQuestionUserInput";
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


test("render correct for question2 ", () => {
  const tree = renderer
    .create(<ServiceQuestionUserInput question={questions[1]} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(`
<tr>
  <td>
    <input
      name="title"
      placeholder="TITLE"
      type="text"
      value="FOR TEST PURPOSE"
    />
  </td>
  <td>
    <select
      name="type"
      value="MUTIPLECHOICE"
    >
      <option
        value="MUTIPLECHOICE"
      >
        MUTIPLECHOICE
      </option>
      <option
        value="MINMAX"
      >
        MINMAX
      </option>
      <option
        value="SHORTANSWER"
      >
        SHORTANSWER
      </option>
      <option
        value="TRUEFALSE"
      >
        TRUEFALSE
      </option>
      <option
        value=""
      >
        ANY
      </option>
    </select>
  </td>
  <td>
    <input
      name="choice"
      placeholder="CHOICE"
      type="text"
      value="TEST, TEST2"
    />
  </td>
  <td>
    <button
      style={
        Object {
          "background": "rgb(49,168,75)",
          "color": "white",
          "marginLeft": "5px",
          "marginRight": "5px",
          "paddingLeft": "22px",
          "paddingRight": "22px",
          "textAlign": "center",
        }
      }
    >
      Add
    </button>
    <button
      style={
        Object {
          "background": "rgb(44,131,232)",
          "color": "white",
          "marginLeft": "5px",
          "marginRight": "5px",
          "paddingLeft": "10px",
          "paddingRight": "10px",
          "textAlign": "center",
        }
      }
    >
      Update
    </button>
  </td>
</tr>
`);
});

test("render correct2 for question 1 ", () => {
  const tree = renderer
    .create(<ServiceQuestionUserInput question={questions[0]} />)
    .toJSON();
  expect(tree).toMatchInlineSnapshot(
    `
<tr>
  <td>
    <input
      name="title"
      placeholder="TITLE"
      type="text"
      value=""
    />
  </td>
  <td>
    <select
      name="type"
      value=""
    >
      <option
        value="MUTIPLECHOICE"
      >
        MUTIPLECHOICE
      </option>
      <option
        value="MINMAX"
      >
        MINMAX
      </option>
      <option
        value="SHORTANSWER"
      >
        SHORTANSWER
      </option>
      <option
        value="TRUEFALSE"
      >
        TRUEFALSE
      </option>
      <option
        value=""
      >
        ANY
      </option>
    </select>
  </td>
  <td>
    <input
      name="choice"
      placeholder="CHOICE"
      type="text"
      value=""
    />
  </td>
  <td>
    <button
      style={
        Object {
          "background": "rgb(49,168,75)",
          "color": "white",
          "marginLeft": "5px",
          "marginRight": "5px",
          "paddingLeft": "22px",
          "paddingRight": "22px",
          "textAlign": "center",
        }
      }
    >
      Add
    </button>
    <button
      style={
        Object {
          "background": "rgb(44,131,232)",
          "color": "white",
          "marginLeft": "5px",
          "marginRight": "5px",
          "paddingLeft": "10px",
          "paddingRight": "10px",
          "textAlign": "center",
        }
      }
    >
      Update
    </button>
  </td>
</tr>
`
  );
});
