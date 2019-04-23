import React from 'react'
import ServiceTabNavContainer from './ServiceTabNavigator/ServiceTabNavContainer'
import ServiceCategoryPills from './ServiceCategoryPills/ServiceCategoryPills'
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
                 <ServiceTabNavContainer history={this.props.history} />
            </div>
        )
    }
}


export default Home