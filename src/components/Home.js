import React from 'react'
// import SearchBar from './SearchBar/SearchBar'
import ServiceTabNavigator from './ServiceTabNavigator/ServiceTabNavigator'
import ServiceCategoryPills from './ServiceCategoryPills/ServiceCategoryPills'
import serviceCategories from '../data/service-categories.mock.json'

const Home = ({services}) =>
    <div>
        <div className="row">
            <div className="col-8">
                <h1>
                    Find professionals near you.
                </h1>
                {/* <SearchBar history={history}/> */}
            </div>
        </div>

        <br/>
        <br/>
        <br/>
        <div>
            <ServiceCategoryPills/>
        </div>
        <br/>
        <br/>
        <br/>
        <ServiceTabNavigator services={services}/>
    </div>;

export default Home