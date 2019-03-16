import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
class ServiceQuestions extends React.Component {
    constructor(props) {
        super(props)
        this.serviceQuestionService = ServiceQuestionService.getInstance()
        this.state = {
            serviceQuestions: [],
            question : {
                id: "", title: "", type: "MUTIPLECHOICE", choice: "", service_id: '123'
            }
        }
        this.remove = this.remove.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createQuestion = this.createQuestion.bind(this);
    }
    componentDidMount() {
        this.findAllServiceQuestions();
    }

    findAllServiceQuestions = () => {
    this.serviceQuestionService.findAllServiceQuestions()
        .then(serviceQuestions =>
            this.setState({
                serviceQuestions: serviceQuestions
            })
        )
    }
    
    selectQuestion(id) {
        for(var i in this.state.serviceQuestions) {
            if(this.state.serviceQuestions[i].id === id) {
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
            .then(() => {
            let updatedGroups = [...this.state.serviceQuestions].filter(i => i.id !== id);
            this.setState({serviceQuestions: updatedGroups})})
    }

    createQuestion() {
        console.log("let create")
        this.serviceQuestionService
            .createQuestion(this.state.question)
            .then(this.findAllServiceQuestions)
    }

    updateQuestion = () =>
    this.serviceQuestionService
        .updateQuestion(this.state.question)
        .then(this.findAllServiceQuestions)


    handleInputChange(event) {
        const target = event.target;
        const value = target.value
        const name = target.name;

        this.setState(prevState => ({
            question: {
                ...prevState.question,
                id: this.state.question.id,
                [name] : value
            },
        }));
    }

    render() {
        return(
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
                        value= {this.state.question.title}
                        onChange={this.handleInputChange} 
                        placeholder="TITLE"/>
                        </td>
                        <td>
                        <select value={this.state.question.type}
                        name="type" onChange={this.handleInputChange}>
                        <option value="MUTPLECHOICE">MUTPLECHOICE</option>
                        <option value="MAXMIN">MAXMIN</option>
                        <option value="SHROTANSWER">SHROTANSWER</option>
                        <option value="TRUEFALSE">TRUEFALSE</option>
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
                        <button style={{background : "linear-gradient(70deg, #6bf996, white)"}}
                        onClick={this.createQuestion}>Add</button>
                        <button style={{background: "linear-gradient(70deg, black, white)"}}onClick={this.updateQuestion}> <span style={{color : "white"}}>Double Cli</span>ck to Update it</button>
                        </td>
                    </tr>
                    {
                        this.state.serviceQuestions
                            .map(serviceQuestion =>
                                <tr key={serviceQuestion.id}>
                                    <td>{serviceQuestion.title} </td>
                                    <td>{serviceQuestion.type}</td>
                                    <td>{serviceQuestion.choice}</td>
                                    <td><button style={{background : "linear-gradient(70deg, #e21d4b, #fc7997)",
                                        borderRadius : "10px"}}
                                        onClick={() => this.remove(serviceQuestion.id)}>Del</button>
                                    <button style={{background : "linear-gradient(70deg, #3615c6, #745ae2)",
                                        borderRadius : "15px",
                                        color : "#a493ed"}}
                                        onClick={() => this.selectQuestion(serviceQuestion.id)}>Select</button></td>
                                    
                                </tr>
                            )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}



export default ServiceQuestions