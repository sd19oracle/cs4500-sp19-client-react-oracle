import React from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import ServiceAnswers from './ServiceAnswers'
import ServiceAnswerDetails from './ServiceAnswerDetails'
import ServiceQuestions from './ServiceQuestions'
import ServiceQuestionDetails from './ServiceQuestionDetails';
import FAQAnswers from './FAQAnswers';
import FAQAnswerDetails from './FAQAnswerDetails';
import FAQs from './FAQs';
import FAQDetails from './FAQDetails';


const Admin = () =>
    <div>
        <h2>Admin</h2>
        <Router>
            <div className="row">
                <div className="col-3">
                    <Link to="/admin/service-answers">Service Answers</Link>
                    <br/>
                    <Link to="/admin/service-answers/1">Service Answers Details</Link>
                    <br/>
                    <Link to="/admin/service-questions">Service Questions</Link>
                    <br/>
                    <Link to="/admin/service-questions/1">Service Questions Details</Link>
                    <br/>
					<Link to="/admin/faq-answers">FAQ Answers</Link>
					<br/>
					<Link to="/admin/faq-answers/1">FAQ Answer Details</Link>
					<br/>
					<Link to="/admin/faqs">FAQs</Link>
					<br/>
					<Link to="/admin/faqs/1">FAQ Details</Link>
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
						component={FAQAnswers}/>
					<Route
						path="/admin/faq-answers/:id"
						exact
						component={FAQAnswerDetails}/>
					<Route
						path="/admin/faqs"
						exact
						component={FAQs}/>
					<Route
						path="/admin/faq-details"
						exact
						component={FAQDetails}/>
                </div>
            </div>
        </Router>
    </div>

export default Admin
