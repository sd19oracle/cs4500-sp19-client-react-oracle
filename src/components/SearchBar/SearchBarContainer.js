import React from 'react'
import SearchBarService from '../../services/SearchBarService'
import SearchBar from './SearchBar';

class SearchBarContainer extends React.Component {
    constructor(props) {
        super(props)
        this.searchBarService = SearchBarService.getInstance()
        this.state = {
            providersList: [],
            name: "",
            zip: ""

        }
        this.searchProvByName = this.searchProvByName.bind(this)
        this.searchProvByZip = this.searchProvByZip.bind(this)
        this.searchProvByNameAndZip = this.searchProvByNameAndZip.bind(this)
        this.pressSearch = this.pressSearch.bind(this)
    }

    searchProvByName(name) {
        this.searchBarService
            .findProvidersByName(name)
            .then(providers =>
                this.setState({
                    providersList: providers
                }, function () {
                    console.log(this.state.providersList)
                    this.props.history.push({
                        pathname: '/Providers',
                        state: {
                            name: this.state.name,
                            zip: this.state.zip,
                            list: this.state.providersList
                        }
                    })
                })
            )
    }
    searchProvByZip(zip) {
        this.searchBarService
            .findProvidersByZip(zip)
            .then(providers =>
                this.setState({
                    providersList: providers
                }, function () {
                    console.log(this.state.providersList)
                    this.props.history.push({
                        pathname: '/Providers',
                        state: {
                            name: this.state.name,
                            zip: this.state.zip,
                            list: this.state.providersList
                        }
                    })
                })
            )
    }
    searchProvByNameAndZip(name, zip) {
        this.searchBarService
            .findProvidersByNameAndZip(name, zip)
            .then(providers =>
                this.setState({
                    providersList: providers
                }, function () {
                    console.log(this.state.providersList)
                    this.props.history.push({
                        pathname: '/Providers',
                        state: {
                            name: this.state.name,
                            zip: this.state.zip,
                            list: this.state.providersList
                        }
                    })
                })
            )
    }

    pressSearch() {
        if (this.state.name !== "" && this.state.zip !== "") {
            console.log("here1")
            this.searchProvByNameAndZip(this.state.name, this.state.zip)
        } else if (this.state.name === "" && this.state.zip !== "") {
            console.log("here2")
            this.searchProvByZip(this.state.zip)
        } else if (this.state.name !== "" && this.state.zip === "") {
            console.log("here3" + this.state.name)
            this.searchProvByName(this.state.name)
        } else {
            console.log("here4")
            this.searchProvByZip(0)
        }
    }

    updateName = e => {
        this.setState({
            name: e.target.value
        });
    };

    updateZip = e => {
        this.setState({
            zip: e.target.value
        })
    }

    numberCheck = e => {
        const re = /[0-9A-F:]+/g;
        if (!re.test(e.key)) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div>
                <SearchBar
                    updateName={this.updateName}
                    updateZip={this.updateZip}
                    name={this.state.name}
                    zip={this.state.zip}
                    pressSearch={this.pressSearch}
                    numberCheck={this.numberCheck}
                />
            </div>
        )
    }
}

export default SearchBarContainer