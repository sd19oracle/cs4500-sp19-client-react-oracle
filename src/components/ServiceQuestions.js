import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'

class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props);
        this.serviceQuestionService = ServiceQuestionService.getInstance();
        this.state = {
            serviceQuestions: [],
            filterQuestion: {
                title: '',
                type: '',
                choice: ''
            }
        };
        this.updateForm = this.updateForm.bind(this)
    }

    componentDidMount() {
        this.serviceQuestionService
            .findAllServiceQuestions()
            .then(serviceQuestions =>
                this.setState({
                    serviceQuestions: serviceQuestions
                })
            )
    }

    updateForm(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            filterQuestion: {
                title: this.state.filterQuestion.title,
                type: this.state.filterQuestion.type,
                choice: this.state.filterQuestion.choice,
                [name]: value
            }
        });
    }

    applyFilter = () =>
        this.serviceQuestionService
            .findServiceQuestionsByFilter(this.state.filterQuestion)
            .then(filteredServiceQustions =>
                this.setState({
                    serviceQuestions: filteredServiceQustions
                }));

    render() {
        return (
            <div>
                <h3>Service Questions</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <th>title</th>
                        <th>type</th>
                        <th>choice</th>
                    </tr>
                    <tr>
                        <td>
                            <input
                                name="title"
                                type="text"
                                onChange={this.updateForm}/>
                        </td>
                        <td>
                            <input
                                name="type"
                                type="text"
                                onChange={this.updateForm}/>
                        </td>
                        <td>
                            <input
                                name="choice"
                                type="text"
                                onChange={this.updateForm}/>
                        </td>
                    </tr>
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>{serviceQuestion.title}</td>
                                    <td>{serviceQuestion.type}</td>
                                    <td>{serviceQuestion.choice}</td>
                                </tr>
                            )
                    }
                    <tr>
                        <td>
                            <button onClick={this.applyFilter}>Search</button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )

    }
}

export default ServiceQuestions