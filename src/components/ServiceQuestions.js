import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [],
            current_page: 1,
            total_questions: 0,
            total_pages: 0,
            page_size: 10
        }
        this.default_page_item = [10, 20, 50, "ALL"]
        this.change_page_size = this.change_page_size.bind(this)
        this.find_questions = this.find_questions.bind(this)
        // this.prev_button_click = this.prev_button_click.bind(this)
        // this.next_button_click = this.next_button_click.bind(this)
        // this.page_buttons_click = this.page_buttons_click.bind(this)
    }

    componentDidMount() {
        this.serviceQuestionService
            .findPageInfo(this.state.page_size)
            .then(pageInfo =>
                this.setState({
                    serviceQuestions: pageInfo.list_questions,
                    total_pages: pageInfo.page_num,
                      total_questions: pageInfo.total_questions
                })
            )
    }

    find_questions(num) {
        this.serviceQuestionService
            .findPageInfo(num)
            .then(pageInfo =>
                this.setState({
                    serviceQuestions: pageInfo.list_questions,
                    total_pages: pageInfo.page_num,
                    total_questions: pageInfo.total_questions
                })
            )
    }

    change_page_size(event) {
        if (event.target.value === "ALL") {
            this.setState({page_size: this.state.total_questions})
            this.find_questions(this.state.total_questions)
        } else {
            this.setState({page_size: event.target.value})
            this.find_questions(event.target.value)
        }
    }

    prev_button_click(event) {

    }

    next_button_click(event) {

    }



    render() {
        console.log(this.state.serviceQuestions)
        console.log(this.state.page_size)
        return (
            <div>
                <h3>Service Questions</h3>
                <table className="table">
                    <tbody>
                        {
                            this.state.serviceQuestions
                                .map(serviceQuestion =>
                                    <tr key={serviceQuestion.id}>
                                        <td>{serviceQuestion.title}</td>
                                    </tr>
                                )
                        }
                    </tbody>
                </table>
                <select onChange={this.change_page_size} value = {this.state.page_size}>
                    {this.default_page_item.map((x, index) =>
                        <option key={index} value={x}> {x} </option>)}
                </select>
                <div>
                    {

                    }
                </div>
            </div>
        )
    }
}

export default ServiceQuestions