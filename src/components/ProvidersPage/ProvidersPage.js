import React from 'react'
import SearchBarContainer from '../SearchBar/SearchBarContainer'
import ServiceProviderList from './ServiceProviderList'
import SearchBarService from '../../services/SearchBarService'

class ProviderPage extends React.Component {
    constructor(props) {
        super(props)
        this.searchBarService = SearchBarService.getInstance();
        if (props.location.state) {
            this.state = {
                providerList: props.location.state.list,
                name: props.location.state.name,
                zip: props.location.state.zip
            }
        } else {
            this.state = {
                providerList: [],
                name: "",
                zip: ""
            }
            this.searchProvByName = this.searchProvByName.bind(this)
            this.searchProvByZip = this.searchProvByZip.bind(this)
            this.searchProvByNameAndZip = this.searchProvByNameAndZip.bind(this)
        }
    }

    componentDidMount(props = this.props) {
        if (props.location.state) {
            this.state = {
                providerList: props.location.state.list,
                name: props.location.state.name,
                zip: props.location.state.zip
            }
        } else {
            this.searchBarService.findProvidersByZip(0).then(providers =>
                this.setState({
                    name: "",
                    zip: "0",
                    providerList: providers
                }))
        }
    }

    loadPosts(props = this.props) {
        if (props.location.state) {
            this.state = {
                providerList: props.location.state.list,
                name: props.location.state.name,
                zip: props.location.state.zip
            }
        } else {
            this.searchBarService.findProvidersByZip(0).then(providers =>
                this.setState({
                    name: "",
                    zip: "0",
                    providerList: providers
                }))
        }
    }

    componentWillReceiveProps(nextProps) {
        this.loadPosts(nextProps)
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
