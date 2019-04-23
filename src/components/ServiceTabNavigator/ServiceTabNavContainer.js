import React from 'react'
import ServiceTabNavigator from './ServiceTabNavigator'
import ServiceService from '../../services/ServiceService'
import serviceCategories from '../../data/popular-service-categories.mock'
import ServiceTabItem from "./ServiceTabItem";

class ServiceTabNavContainer extends React.Component {
    constructor(props) {
        super(props);
        this.serviceService = ServiceService.getInstance();
        this.state = {
            popularServiceCategories: [],
            activeCategoryServices: []
        };
        this.switchCategory = this.switchCategory.bind(this);
    }

    componentDidMount() {
        for (let i in serviceCategories) {
            this.serviceService
                .findPopularServicesByCategory(serviceCategories[i].id, 6)
                .then(services => {
                    let newPopularServices = this.state.popularServiceCategories;
                    newPopularServices.push(
                        {
                            "id": serviceCategories[i].id,
                            "category_name": serviceCategories[i].name,
                            "services": services
                        });
                    this.setState({
                        popularServiceCategories: newPopularServices,
                        activeCategoryServices: this.state.popularServiceCategories[0].services
                    });
                })
        };
    }

    switchCategory(event) {
        for (let i in this.state.popularServiceCategories) {
            if (this.state.popularServiceCategories[i].category_name === event.target.innerText) {
                this.setState({
                    activeCategoryServices: this.state.popularServiceCategories[i].services
                })
            }
        }
    }

    render() {
        return (
            <div>
                <ServiceTabNavigator services={this.state.popularServiceCategories}
                    switchCategory={this.switchCategory}>
                </ServiceTabNavigator>
                <ServiceTabItem services={this.state.activeCategoryServices }/>
            </div>
        )

    }
}

export default ServiceTabNavContainer