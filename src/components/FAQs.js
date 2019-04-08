import React from 'react'
import FAQService from '../services/FAQService'
import {Link} from "react-router-dom";

export default class FAQs extends React.Component {
  constructor(props) {
    super(props);
    this.faqService = FAQService.getInstance();
    this.state = {
      faqs: [],
      count: 10
    };
    this.previous = this.previous.bind(this);
    this.reload = this.reload.bind(this);
    this.next = this.next.bind(this);
    this.setCount = this.setCount.bind(this);
  }

  componentDidMount() {
    this.reload(10, 0);
  }

  reload(count, page) {
    this.faqService
      .findFAQsPaged(count, page)
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
    this.setState({count: e.target.value});
    this.reload(e.target.value, 0);
  }

  render() {
    let prevClass = "page-item";
    let nextClass = "page-item";
    if (this.state.metadata && this.state.metadata.first) prevClass += " disabled";
    if (this.state.metadata && this.state.metadata.last) nextClass += " disabled";
    return (
      <div>
        <h3>FAQs</h3>
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
                <a className="page-link" href="" onClick={this.previous}>Previous</a>
              </li>
              <li className={prevClass}>
                <a className="page-link" href="" onClick={this.previous}>
                  {this.state.metadata && this.state.metadata.pageable.pageNumber}
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="">
                  {this.state.metadata && this.state.metadata.pageable.pageNumber + 1}
                </a>
              </li>
              <li className={nextClass}>
                <a className="page-link" href="" onClick={this.next}>
                  {this.state.metadata && this.state.metadata.pageable.pageNumber + 2}
                </a>
              </li>
              <li className={nextClass}>
                <a className="page-link" href="" onClick={this.next}>Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
