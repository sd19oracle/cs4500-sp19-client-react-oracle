import React from "react";
import ServiceQuestionUserInput from "../components/ServiceQuestionUserInput";
import renderer from "react-test-renderer";

const question1 = {
  id: "",
  title: "",
  type: "",
  choice: "",
  service_id: "123"
};

const question2 = {
  id: "22",
  title: "FOR TEST PURPOSE",
  type: "MUTIPLECHOICE",
  choice: "TEST, TEST2",
  service_id: "123"
};

test("render correct for question 1", () => {
  const tree = renderer
    .create(<ServiceQuestionUserInput question={question1} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("render correct for question2 ", () => {
  const tree = renderer
    .create(<ServiceQuestionUserInput question={question2} />)
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
    .create(<ServiceQuestionUserInput question={question1} />)
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
