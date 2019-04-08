import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import {Link} from "react-router-dom";

class FAQAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.faqAnswerService = FAQAnswerService.getInstance();
    this.state = {
      faqAnswers: []
    }
  }

  componentDidMount() {
    this.faqAnswerService
      .findAllFAQAnswers()
      .then(faqAnswers =>
        this.setState({
          faqAnswers: faqAnswers
        })
      )
  }

  render() {
    return (
      <div>
        <h3>FAQ Answers</h3>
        <table className="table">
          <tbody>
          <tr>
            <td>ID</td>
            <td>Question ID</td>
            <td>Question</td>
            <td>Answer</td>
          </tr>
          {
            this.state.faqAnswers
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
      </div>
    )
  }
}

export default FAQAnswers
