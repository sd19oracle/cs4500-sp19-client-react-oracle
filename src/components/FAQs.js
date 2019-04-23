import React from 'react'
import FAQService from '../services/FAQService'
import {Link} from "react-router-dom";

export default class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.faqService = FAQService.getInstance();
    this.state = {
      filterTitle: "",
      filterQuestion: "",
      faqs: [],
      count: 10
    };
    this.previous = this.previous.bind(this);
    this.reload = this.reload.bind(this);
    this.next = this.next.bind(this);
    this.setCount = this.setCount.bind(this);
    this.titleFilter = this.titleFilter.bind(this);
    this.questionFilter = this.questionFilter.bind(this);
  }

  componentDidMount() {
    this.reload(10, 0, "", "");
  }

  reload(count, page, filterTitle, filterQuestion) {
    this.faqService
      .findAllFAQs({count, page, title: filterTitle, question: filterQuestion})
      .then(paged => {
        let {content, ...metadata} = paged;
        this.setState({
          faqs: content,
          metadata,
          count: metadata.pageable.pageSize
        });
      });
  }

  previous(e) {
    e.preventDefault();
    if (this.state.metadata.first) return;
    this.reload(this.state.count, this.state.metadata.pageable.pageNumber - 1);
  }

  next(e) {
    e.preventDefault();
    if (this.state.metadata.last) return;
    this.reload(this.state.count, this.state.metadata.pageable.pageNumber + 1);
  }

  setCount(e) {
    this.setState({count: e.currentTarget.value});
    this.reload(e.currentTarget.value, 0, this.state.filterTitle, this.state.filterQuestion);
  }

  titleFilter(e) {
    this.setState({filterTitle: e.currentTarget.value});
    this.reload(this.state.count, 0, e.currentTarget.value, this.state.filterQuestion);
  }

  questionFilter(e) {
    this.setState({filterQuestion: e.currentTarget.value});
    this.reload(this.state.count, 0, this.state.filterTitle, e.currentTarget.value);
  }

  render() {
    let prevClass = "page-item";
    let nextClass = "page-item";
    if (this.state.metadata && this.state.metadata.first) prevClass += " disabled";
    if (this.state.metadata && this.state.metadata.last) nextClass += " disabled";
    return (
      <div>
        <div className="d-flex">
          <h3>FAQs</h3>
          <input
            className={"form-control ml-1"}
            placeholder={"Title"}
            onChange={this.titleFilter}
            value={this.state.filterTitle}
          />
          <input
            className={"form-control ml-1"}
            placeholder={"Question"}
            onChange={this.questionFilter}
            value={this.state.filterQuestion}
          />
        </div>
        <table className="table">
          <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Question</td>
          </tr>
          </thead>
          <tbody>
          {
            this.state.faqs
              .map(faq =>
                <tr key={faq.id}>
                  <td><Link to={`/admin/faqs/${faq.id}`}>{faq.id}</Link></td>
                  <td>{faq.title}</td>
                  <td>{faq.question}</td>
                </tr>
              )
          }
          </tbody>
        </table>
        <div className="d-flex">
          <select className="form-control mr-1" value={this.state.count}
                  onChange={this.setCount} style={{width: "4rem"}}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className={prevClass}>
                <button className="page-link" onClick={this.previous}>Previous</button>
              </li>
              <li className={prevClass}>
                <button className="page-link" onClick={this.previous}>
                  {this.state.metadata && this.state.metadata.pageable.pageNumber}
                </button>
              </li>
              <li className="page-item active">
                <button className="page-link" >
                  {this.state.metadata && this.state.metadata.pageable.pageNumber + 1}
                </button>
              </li>
              <li className={nextClass}>
                <button className="page-link" onClick={this.next}>
                  {this.state.metadata && this.state.metadata.pageable.pageNumber + 2}
                </button>
              </li>
              <li className={nextClass}>
                <button className="page-link" onClick={this.next}>Next</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
