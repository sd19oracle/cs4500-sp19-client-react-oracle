import React from 'react'
import ServiceCategoryList from './ServiceCategoryList'
import ServiceCategorySectionList from './ServiceCategorySectionList'
import SearchBar from "./SearchBar";
import ServiceCategoryService from "../../services/ServiceCategoryService";
import "./index.css"

export default class ServiceNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.serviceCategoryService = ServiceCategoryService.getInstance();
    this.filterCategories = this.filterCategories.bind(this);
    this.state = {
      serviceFilter: "",
      serviceCategories: []
    }
  }

  componentDidMount() {
    this.load("");
  }

  load(nameFilter) {
    this.serviceCategoryService.filterServiceCategories(nameFilter)
      .then(cats => this.setState({serviceCategories: cats}));
  }

  filterCategories(e) {
    this.load(e.currentTarget.value);
  }

  render = () => <div className="row">
    <div className="col-4 separate-vert">
      <SearchBar placeholder={"Filter categories"} handler={this.filterCategories}/>
      <ServiceCategoryList
        serviceCategories={this.state.serviceCategories}
        catId={this.props.match.params.catId}/>
    </div>
    <div className="col-8">
      <ServiceCategorySectionList
        serviceCategories={this.state.serviceCategories}/>
    </div>
  </div>;
}
