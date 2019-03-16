import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'

class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.default_page_item = [10, 20, 50, "ALL"]
        this.state = {
            serviceQuestions: [],
            current_page: 1,
            total_questions: 0,
            total_pages: 0,
            page_size: this.default_page_item[0],
            prev_button_state: "disabled",
            next_button_state: "",
            question: {
                id: "", title: "", type: "", choice: "", service_id: '123'
            },
            searchButtonOn: true
        }
        this.change_page_size = this.change_page_size.bind(this)
        this.find_questions = this.find_questions.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.find_page = this.find_page.bind(this)
        this.prev_button_click = this.prev_button_click.bind(this)
        this.next_button_click = this.next_button_click.bind(this)
        this.set_prev_next_state = this.set_prev_next_state.bind(this)
        this.single_button = this.single_button.bind(this)
        this.remove = this.remove.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createQuestion = this.createQuestion.bind(this);
        this.toggleSearch = this.toggleSearch.bind(this)
    }

    componentDidMount() {
        this.serviceQuestionService
            .findPageInfo(this.default_page_item[0])
            .then(pageInfo =>
                this.setState({
                    serviceQuestions: pageInfo.list_questions,
                    total_pages: pageInfo.page_num,
                    total_questions: pageInfo.total_questions,
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

    prev_button_click() {
        if (this.state.current_page > 1) {
            this.setState({
                current_page: this.state.current_page - 1
            })
            this.find_page(this.state.current_page - 1, this.state.page_size)
        }
        this.set_prev_next_state(this.state.current_page - 1)
    }

    next_button_click() {
        if (this.state.current_page + 1 <= this.state.total_pages) {
            this.setState({
                current_page: this.state.current_page + 1
            })
            this.find_page(this.state.current_page + 1, this.state.page_size)
        }
        this.set_prev_next_state(this.state.current_page + 1)
    }

    find_page(page_num, page_size) {
        this.serviceQuestionService
            .findPageItem(page_size, page_num)
            .then(pageItem =>
                this.setState({
                    serviceQuestions: pageItem
                })
            )
    }

    handleClick(event) {
        this.setState({
            current_page: Number(event.target.id)
        })
        this.find_page(event.target.id, this.state.page_size)
        this.set_prev_next_state(event.target.id)
    }

    set_prev_next_state(num_button) {
        if (num_button > 1) {
            this.setState({prev_button_state: ""})
        } else {
            this.setState({prev_button_state: "disabled"})
        }

        if (num_button < this.state.total_pages) {
            this.setState({next_button_state: ""})
        } else {
            this.setState({next_button_state: "disabled"})
        }
    }

    single_button(num) {
        console.log(num === this.state.current_page)
        if (num === this.state.current_page) {
            return <button key={num} id={num} style={{backgroundColor: "#69adfc", opacity: 0.8}}
                           onClick={this.handleClick}>{num}</button>
        } else {
            return <button key={num} id={num} onClick={this.handleClick}>{num}</button>
        }
    }

    selectQuestion(id) {
        for (var i in this.state.serviceQuestions) {
            if (this.state.serviceQuestions[i].id === id) {
                console.log(this.state.serviceQuestions[i])
                var addOn = this.state.serviceQuestions[i];
                break
            }
        }
        this.setState(prevState => ({
            question: {
                ...prevState.question,
                id: addOn.id,
                title: addOn.title,
                type: addOn.type,
                choice: addOn.choice
            }
        }))
    }

    remove(id) {
        this.serviceQuestionService
            .removeById(id)
             .then(
            //     let updatedGroups = [...this.state.serviceQuestions].filter(i => i.id !== id);
            //     this.setState({serviceQuestions: updatedGroups})
                 updatedGroups => {
                     this.setState({serviceQuestions: updatedGroups})
                 })
    }


    createQuestion() {
        if ((this.state.question.title === "")) {
            alert("Please enter at least a Title!")
        } else if (this.state.question.type === "") {
            alert("Question type cannot be ANY when adding a new question! \n" +
                "Please select a valid Type using the drop-down. \n\n" +
                "(Type ANY is only for search purposes.)")
        } else {
            this.serviceQuestionService
                .createQuestion(this.state.question)
                .then(this.find_page(this.state.current_page, this.state.page_size))
        }
    }

    updateQuestion = () =>
        this.serviceQuestionService
            .updateQuestion(this.state.question)
            .then(this.find_page(this.state.current_page, this.state.page_size))


    handleInputChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState(prevState => ({
            question: {
                ...prevState.question,
                id: this.state.question.id,
                [name]: value
            },
        }));
    }

    toggleSearch() {
        if (this.state.searchButtonOn) {
            this.serviceQuestionService
                .findServiceQuestionsByFilter(this.state.question)
                .then(filteredServiceQustions =>
                    this.setState({
                        serviceQuestions: filteredServiceQustions
                    }));
        } else {
            this.setState({
                question: {
                    id: "", title: "", type: "", choice: "", service_id: '123'
                }
            });
            this.find_page(this.state.current_page, this.state.page_size);
        }

        this.setState(function (prevState) {
            return {searchButtonOn: !prevState.searchButtonOn};
        });
    }


    render() {
        const pageNumbers = [];
        for (let i = 1; i <= this.state.total_pages; i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return this.single_button(number)
        });

        const prev_button_state = this.state.prev_button_state
        let renderPrevBtn = null;
        renderPrevBtn = (
            <button className={prev_button_state} onClick={this.prev_button_click} disabled={prev_button_state}>
                <span id="btnPrev"> Prev </span>
            </button>
        );


        let renderNextBtn = null;
        const next_button_state = this.state.next_button_state
        renderNextBtn = (
            <button className={next_button_state} onClick={this.next_button_click} disabled={next_button_state}>
                <span id="btnNext"> Next </span>
            </button>
        );

        return (
            <div>
                <h3>Service Questions</h3>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>Title</td>
                        <td>Type</td>
                        <td>Choice</td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="text"
                                name="title"
                                value={this.state.question.title}
                                onChange={this.handleInputChange}
                                placeholder="TITLE"/>
                        </td>
                        <td>
                            <select value={this.state.question.type}
                                    name="type" onChange={this.handleInputChange}>
                                <option value="MUTIPLECHOICE">MUTIPLECHOICE</option>
                                <option value="MINMAX">MINMAX</option>
                                <option value="SHORTANSWER">SHORTANSWER</option>
                                <option value="TRUEFALSE">TRUEFALSE</option>
                                <option value="">ANY</option>
                            </select>
                        </td>
                        <td>
                            <input
                                type="text"
                                name="choice"
                                value={this.state.question.choice}
                                onChange={this.handleInputChange}
                                placeholder="CHOICE"/>
                        </td>
                        <td>
                            <button style={{
                                background: "rgb(49,168,75)",
                                color: "white",
                                textAlign: "center",
                                paddingLeft: "22px",
                                paddingRight: "22px",
                                marginLeft: "5px",
                                marginRight: "5px",
                            }}
                                    onClick={this.createQuestion}>Add
                            </button>
                            <button style={{
                                background: "rgb(44,131,232)",
                                color: "white",
                                textAlign: "center",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                marginLeft: "5px",
                                marginRight: "5px",
                            }}
                                    onClick={this.updateQuestion}>Update
                            </button>
                        </td>
                    </tr>
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>

                                    <td>{serviceQuestion.title}</td>
                                    <td>{serviceQuestion.type}</td>
                                    <td>{serviceQuestion.choice}</td>
                                    <td>
                                        <button style={{
                                            background: "rgb(237,43,63)",
                                            color: "white",
                                            textAlign: "center",
                                            paddingLeft: "13px",
                                            paddingRight: "13px",
                                            marginLeft: "5px",
                                            marginRight: "5px",
                                        }}
                                                onClick={() => this.remove(serviceQuestion.id)}>Delete
                                        </button>
                                        <button style={{
                                            background: "rgb(83,189,248)",
                                            color: "white",
                                            textAlign: "center",
                                            paddingLeft: "13px",
                                            paddingRight: "13px",
                                            marginLeft: "5px",
                                            marginRight: "5px",
                                        }}
                                                onClick={() => this.selectQuestion(serviceQuestion.id)}>Select
                                        </button>
                                    </td>
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
                <select onChange={this.change_page_size}>
                    {this.default_page_item.map((x, index) =>
                        <option key={index} value={x}> {x} </option>)}
                </select>
                <div>
                    {renderPrevBtn}
                    {renderPageNumbers}
                    {renderNextBtn}
                </div>
            </div>
        )
    }
}

export default ServiceQuestions