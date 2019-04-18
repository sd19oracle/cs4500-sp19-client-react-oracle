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
        this.searchBarService.findProvidersByName(name)
            .then(providers =>
                this.setState({
                    providersList: providers
                })
            )
    }
    searchProvByZip(zip) {
        this.searchBarService.findProvidersByZip(zip)
            .then(providers =>
                this.setState({
                    providersList: providers
                })
            )
    }
    searchProvByNameAndZip(name, zip) {
        this.searchBarService.findProvidersByNameAndZip(name, zip)
            .then(providers =>
                this.setState({
                    providersList: providers
                })
            )
    }

    pressSearch() {
        this.props.history.push('')
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

    render() {
        return (
            <div>
                <SearchBar
                    updateName={this.updateName}
                    updateZip={this.updateZip}
                    name={this.state.name}
                    zip={this.state.zip}
                    pressSearch={this.pressSearch}
                />
            </div>
        )
    }
}

export default SearchBarContainer