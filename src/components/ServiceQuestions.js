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
            },
            searchButtonOn: true
        };
        this.updateForm = this.updateForm.bind(this)
        this.toggleSearch = this.toggleSearch.bind(this)
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

    toggleSearch() {
        if (this.state.searchButtonOn) {
            this.serviceQuestionService
                .findServiceQuestionsByFilter(this.state.filterQuestion)
                .then(filteredServiceQustions =>
                    this.setState({
                        serviceQuestions: filteredServiceQustions
                    }));
        } else {
            this.setState({
                filterQuestion: {
                    title: '',
                    type: '',
                    choice: ''
                }

            });
            this.serviceQuestionService
                .findAllServiceQuestions()
                .then(serviceQuestions =>
                    this.setState({
                        serviceQuestions: serviceQuestions
                    })
                )
        }

        this.setState(function (prevState) {
            return {searchButtonOn: !prevState.searchButtonOn};
        });
    }

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
                                value={this.state.filterQuestion.title}
                                onChange={this.updateForm}/>
                        </td>
                        <td>
                            <input
                                name="type"
                                type="text"
                                value={this.state.filterQuestion.type}
                                onChange={this.updateForm}/>
                        </td>
                        <td>
                            <input
                                name="choice"
                                type="text"
                                value={this.state.filterQuestion.choice}
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
                            <button onClick={this.toggleSearch}>
                                {this.state.searchButtonOn ? 'Search' : 'Clear Search'}
                            </button>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        )

    }
}

export default ServiceQuestions