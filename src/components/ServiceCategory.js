import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
class ServiceCategories extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: []
        }
    }
    componentDidMount() {
        this.serviceCategoryService
            .findAllServiceCategories()
            .then(serviceCategories =>
        this.setState({
            serviceCategories: serviceCategories
        })
    )
    }
    render() {
        return(
            <div>
            <h3>Service Categories</h3>
        <table className="table">
            <tbody>
            {
                this.state.serviceCategories
                        .map(serviceCategory =>
                    <tr key={serviceCategory.id}>
                <td>{serviceCategory.title}</td>
                </tr>
    )
    }
    </tbody>
        </table>
        </div>
    )
    }
}

export default ServiceCategories