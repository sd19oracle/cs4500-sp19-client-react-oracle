import React from "react";
import FAQService from "../../services/FAQService";
import "./index.css";

export default class FAQDetails extends React.Component {
  constructor(props) {
    super(props);
    this.faqService = FAQService.getInstance();
    this.state = {faq: {id: 1}};
    this.addAnswer = this.addAnswer.bind(this);

  }

  componentDidMount() {
    this.load(this.props.match.params.id);
  }

  load(id) {
    this.faqService
      .findFAQById(id)
      .then(faq => this.setState({faq}));
  }

  addAnswer() {
    this.faqService.addAnswer(this.props.match.params.id)
      .then(answer => this.props.history.push(`/admin/faq-answers/${answer.id}?edit=true`));
  }

  render() {
    return (
      <div className={"grid-container"}>
        <div className="d-flex">
          <h3>FAQ Details</h3>
          <button className={"btn btn-primary"} onClick={this.addAnswer}>Add Answer</button>
        </div>
        <div className={"d-flex"}>
          <label className={"flex-shrink-0 m-1"} htmlFor={"questionId"}>Question ID</label>
          <input
            id={"questionId"}
            readOnly={true}
            value={this.state.faq.id}
            className="form-control">
          </input>
        </div>
        <div className={"d-flex"}>
          <label className={"flex-shrink-0 m-1"} htmlFor={"question"}>Question</label>
          <input
            id={"question"}
            readOnly={true}
            className="form-control"
            value={this.state.faq.question}/>
        </div>
      </div>
    )
  }
}
