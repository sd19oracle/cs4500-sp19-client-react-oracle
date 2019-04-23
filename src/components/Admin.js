import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceAnswers from './ServiceAnswers'
import ServiceAnswerDetails from './ServiceAnswerDetails'
import ServiceQuestions from './ServiceQuestionsContainer'
import ServiceQuestionDetails from './ServiceQuestionDetails';
import FAQAnswerDetails from './FAQAnswerDetails';
import FAQs from './FAQs';
import FAQDetails from './FAQDetails';
import ServiceCategory from "./ServiceCategory"
import FAQAnswersContainer from "./FAQAnswersContainer";


const Admin = () =>
  <div>
    <h2>Admin</h2>
    <Router>
      <div className="row">
        <div className="col-3 d-flex flex-column">
          <Link to="/admin/service-answers">Service Answers</Link>
          <Link to="/admin/service-answers/1">Service Answers Details</Link>
          <Link to="/admin/service-questions">Service Questions</Link>
          <Link to="/admin/service-questions/1">Service Questions Details</Link>
          <Link to="/admin/faq-answers">FAQ Answers</Link>
          <Link to="/admin/faq-answers/1">FAQ Answer Details</Link>
          <Link to="/admin/faqs">FAQs</Link>
          <Link to="/admin/faqs/1">FAQ Details</Link>
          <Link to="/admin/service-category">Service Category</Link>
        </div>
        <div className="col-9">
          <Route
            path="/admin/service-answers"
            exact
            component={ServiceAnswers}/>
          <Route
            path="/admin/service-answers/:id"
            exact
            component={ServiceAnswerDetails}/>
          <Route
            path="/admin/service-questions"
            exact
            component={ServiceQuestions}/>
          <Route
            path="/admin/service-questions/:id"
            exact
            component={ServiceQuestionDetails}/>
          <Route
            path="/admin/faq-answers"
            exact
            component={FAQAnswersContainer}/>
          <Route
            path="/admin/faq-answers/:id"
            exact
            component={FAQAnswerDetails}/>
          <Route
            path="/admin/faqs"
            exact
            component={FAQs}/>
          <Route
            path="/admin/faqs/:id"
            exact
            component={FAQDetails}/>
          <Route
            path="/admin/service-category"
            exact
            component={ServiceCategory}/>
        </div>
      </div>
    </Router>
  </div>

export default Admin
