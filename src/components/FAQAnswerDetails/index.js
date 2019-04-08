import React from "react";
import FAQAnswerService from "../../services/FAQAnswerService";
import "./index.css";
import * as qs from "query-string";

export default class FAQAnswerDetails extends React.Component {
  constructor(props) {
    super(props);
    this.faqAnswerService = FAQAnswerService.getInstance();
    this.state = {
      faqAnswer: {
        answer: "",
        id: 1,
        questionId: 1,
        question: ""
      },
      isEditing: false
    };
    this.enableEditing = this.enableEditing.bind(this);
    this.save = this.save.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.cancelEditing = this.cancelEditing.bind(this);
  }

  componentDidMount() {
    this.load(this.props.match.params.id);
    qs.parse(this.props.location.search).edit && this.enableEditing();
  }

  load(id) {
    this.faqAnswerService
      .findFAQAnswerById(id)
      .then(answer => this.setState({
        faqAnswer: answer
      }));
  }

  enableEditing() {
    this.setState({isEditing: true});
  }

  cancelEditing() {
    this.setState({isEditing: false});
    this.load(this.props.match.params.id);
  }

  save() {
    this.setState({isEditing: false});
    this.faqAnswerService.updateFAQAnswer(this.state.faqAnswer);
  }

  deleteAnswer() {
    window.confirm("Are you sure you want to delete this FAQ Answer?")
    && this.faqAnswerService.deleteFAQAnswerById(this.state.faqAnswer.id)
      .then(() => this.props.history.push("/admin/faq-answers"))
  }

  handleInput(e) {
    this.setState({faqAnswer: {...this.state.faqAnswer, answer: e.currentTarget.value}});
  }

  render() {
    return (
      <div className={"grid-container"}>
        <div className="d-flex">
          <h3 className={"mr-1"}>FAQ Answer Details</h3>
          {this.state.isEditing || <button className={"btn btn-warning"} onClick={this.enableEditing}>Edit</button>}
          {this.state.isEditing && <button className={"btn btn-secondary"} onClick={this.cancelEditing}>Cancel</button>}
          {this.state.isEditing && <button className={"btn btn-success"} onClick={this.save}>Save</button>}
          <button className={"btn btn-danger"} onClick={this.deleteAnswer}>Delete</button>
        </div>
        <div className={"d-flex"}>
          <label className={"flex-shrink-0 m-1"} htmlFor={"id"}>Answer ID</label>
          <input
            id={"id"}
            readOnly={true}
            value={this.state.faqAnswer.id}
            className="form-control" />
        </div>
        <div className={"d-flex"}>
          <label className={"flex-shrink-0 m-1"} htmlFor={"questionId"}>Question ID</label>
          <input
            id={"questionId"}
            readOnly={true}
            value={this.state.faqAnswer.questionId}
            className="form-control">
          </input>
        </div>
        <div className={"d-flex"}>
          <label className={"flex-shrink-0 m-1"} htmlFor={"question"}>FAQ Answer Question</label>
          <input
            id={"question"}
            readOnly={true}
            className="form-control"
            value={this.state.faqAnswer.question}/>
        </div>
        <div className={"d-flex"}>
          <label className={"flex-shrink-0 m-1"} htmlFor={"answer"}>FAQ Answer Answer</label>
          <input
            id={"answer"}
            readOnly={!this.state.isEditing}
            className={"form-control"}
            value={this.state.faqAnswer.answer}
            onChange={this.handleInput}/>
        </div>
      </div>
    )
  }
}
