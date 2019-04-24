import React from 'react'
import FAQAnswerService from '../services/FAQAnswerService'
import {Link} from "react-router-dom";
import FAQAnswers from "./FAQAnswers";

export default class FAQAnswersContainer extends React.Component {
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
    return <FAQAnswers faqAnswers={this.state.faqAnswers}/>
  }
}
