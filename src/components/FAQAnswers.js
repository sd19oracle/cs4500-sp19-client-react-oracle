import {Link} from "react-router-dom";
import React from "react";

const FAQAnswers = ({faqAnswers}) => <div>
  <h3>FAQ Answers</h3>
  <table className="table">
    <thead>
    <tr>
      <td>ID</td>
      <td>Question ID</td>
      <td>Question</td>
      <td>Answer</td>
    </tr>
    </thead>
    <tbody>
    {
      faqAnswers
        .map(faqAnswer =>
          <tr key={faqAnswer.id}>
            <td>
              <Link to={`/admin/faq-answers/${faqAnswer.id}`}>{faqAnswer.id}</Link>
            </td>
            <td>{faqAnswer.questionId}</td>
            <td>{faqAnswer.question}</td>
            <td>{faqAnswer.answer}</td>
          </tr>
        )
    }
    </tbody>
  </table>
</div>;

export default FAQAnswers;
