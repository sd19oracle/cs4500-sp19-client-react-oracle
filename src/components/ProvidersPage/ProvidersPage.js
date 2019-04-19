import React from 'react'
import SearchBarContainer from '../SearchBar/SearchBarContainer'
import ServiceProviderList from './ServiceProviderList'
import SearchBarService from '../../services/SearchBarService'

class ProviderPage extends React.Component {
    constructor(props) {
        super(props)
        console.log(props.location.state.list)
        this.searchBarService = SearchBarService.getInstance();
        this.state = {
            providerList : props.location.state.list,
            name : props.location.state.name,
            zip : props.location.state.zip
        }
        this.searchProvByName = this.searchProvByName.bind(this)
        this.searchProvByZip = this.searchProvByZip.bind(this)
        this.searchProvByNameAndZip = this.searchProvByNameAndZip.bind(this)
    }

    searchProvByName(name) {
        console.log("execute?")
        this.searchBarService
            .findProvidersByName(name)
            .then(providers =>
                this.setState({
                    providersList: providers
                })
            )
    }
    searchProvByZip(zip) {
        this.searchBarService
            .findProvidersByZip(zip)
            .then(providers =>
                this.setState({
                    providersList: providers
                })
            )
    }
    searchProvByNameAndZip(name, zip) {
        this.searchBarService
            .findProvidersByNameAndZip(name, zip)
            .then(providers =>
                this.state.providerList = providers)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <SearchBarContainer history={this.props.history} />
                    </div>
                    <div className="col-3 text-right">
                        <a href="#">Sign up</a>
                    </div>
                    <div className="col-1">
                        <a href="#">Log in</a>
                    </div>
                </div>
                <br />
                <br />

                <div className="row">
                    <div className="col-9">
                        <ServiceProviderList
                            serviceProviders={this.state.providerList} />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProviderPage