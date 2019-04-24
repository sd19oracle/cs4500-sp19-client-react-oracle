import React from 'react'
import ServiceCategoryList from './ServiceCategoryList'
import SearchBar from "./SearchBar";
import ServiceCategoryService from "../../services/ServiceCategoryService";
import "./index.css"
import ServiceCards from "./ServiceCards";
import ServiceService from "../../services/ServiceService";
import ServiceLinks from "./ServiceLinks";

export default class ServiceNavigator extends React.Component {

  constructor(props) {
    super(props);
    this.serviceCategoryService = ServiceCategoryService.getInstance();
    this.serviceService = ServiceService.getInstance();
    this.filterCategories = this.filterCategories.bind(this);
    this.filterServices = this.filterServices.bind(this);
    this.currentServiceTitle = this.currentServiceTitle.bind(this);
    this.state = {
      services: [],
      serviceCategories: []
    }
  }

  componentDidMount() {
    this.loadCategories("");
    if (this.props.match.params.catId) {
      this.loadServices("");
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const currentCatID = this.props.match.params.catId;
    const prevCatID = prevProps.match.params.catId;

    if (!currentCatID && prevCatID) {
      // if going from a selection to no selection,
      // then empty the list of services for that selection
      this.setState({services: []})

    } else if (currentCatID !== prevCatID) {
      // if switching ids then load the services for the new one
      this.loadServices("");

    } else if (currentCatID && prevCatID
      && this.state.serviceCategories.length
      !== prevState.serviceCategories.length) {
      // if user selects a category then filters it out,
      // deselect that category
      const pred = cat => cat.id === Number(currentCatID);
      const selectedCat = this.state.serviceCategories.find(pred);
      if (!selectedCat) {
        this.props.history.push("/services");
      }
    }
  }

  loadCategories(nameFilter) {
    this.serviceCategoryService.filterServiceCategories(nameFilter)
      .then(cats => this.setState({serviceCategories: cats}));
  }

  loadServices(nameFilter) {
    this.serviceService.filterServicesForCategory(this.props.match.params.catId, nameFilter)
      .then(services => this.setState({services}));
  }

  filterCategories(e) {
    this.loadCategories(e.currentTarget.value);
  }

  filterServices(e) {
    this.loadServices(e.currentTarget.value);
  }

  currentServiceTitle() {
    if (this.state.serviceCategories.length && this.props.match.params.catId) {
      const pred = cat => cat.id === Number(this.props.match.params.catId);
      const selectedCat = this.state.serviceCategories.find(pred);
      if (selectedCat) {
        return selectedCat.serviceCategoryName;
      } else {
        return null;
      }
    }
    return null;
  }

  render = () => <div className="row">
    <div className="col-4 separate-vert">
      <SearchBar placeholder={"Filter categories"} handler={this.filterCategories}/>
      <SearchBar placeholder={"Filter services"} handler={this.filterServices}/>
      <ServiceCategoryList
        serviceCategories={this.state.serviceCategories}
        catId={this.props.match.params.catId}/>
    </div>
    <div className="col-8">
      <h1>{this.currentServiceTitle()}</h1>
      <ServiceCards services={this.state.services.slice(0, 4)}/>
      <hr/>
      <ServiceLinks services={this.state.services}/>
    </div>
  </div>;
}
