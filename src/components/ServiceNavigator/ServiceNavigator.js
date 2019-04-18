import React from 'react'
import ServiceCategoryList from './ServiceCategoryList'
import ServiceCategorySectionList from './ServiceCategorySectionList'
import SearchBar from "./SearchBar";
import ServiceCategoryService from "../../services/ServiceCategoryService";

export default class ServiceNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.serviceCategoryService = ServiceCategoryService.getInstance();
    this.state = {
      categoryFilter: "",
      serviceFilter: "",
      serviceCategories: []
    }
  }

  componentDidMount() {
    this.serviceCategoryService.findAllServiceCategories()
      .then(cats => this.setState({serviceCategories: cats}));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.props);
  }

  render() {
    return <div className="row">
      <div className="col-4">
        <SearchBar placeholder={"Filter categories"} handler={() => {
        }}/>
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
}
