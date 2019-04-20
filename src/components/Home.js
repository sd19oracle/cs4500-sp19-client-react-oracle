import React from 'react'
// import SearchBar from './SearchBar/SearchBar'
import ServiceTabNavigator from './ServiceTabNavigator/ServiceTabNavigator'
import ServiceCategoryPills from './ServiceCategoryPills/ServiceCategoryPills'
import serviceCategories from '../data/service-categories.mock.json'
import SearchBarContainer from './SearchBar/SearchBarContainer'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <h1>
                            Find professionals near you.
                </h1>
                        <SearchBarContainer history={this.props.history} />
                    </div>
                </div>
                <br />
                <br />
                <br />
                <div>
                    <ServiceCategoryPills />
                </div>
                <br />
                <br />
                <br />
                {/* <ServiceTabNavigator /> */}
            </div>
        )
    }
}


export default Home