import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
import { MdAdd, MdSave, MdEdit, MdDelete } from "react-icons/md"
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
        return (
            <div>
                <h3>Service Categories</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Popularity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    className={"form-control ml-1"}
                                ></input>
                            </td>
                            <td>
                                <input
                                    className={"form-control ml-1"}
                                ></input>
                            </td>
                            <td>
                                <div>
                                    <button
                                        className="add_button btn btn-primary mx-1"><MdAdd /></button>
                                    <button
                                        className="add_button btn btn-success mx-1"><MdSave /></button>
                                </div>
                            </td>
                        </tr>

                        {
                            this.state.serviceCategories
                                .map(serviceCategory =>
                                    <tr key={serviceCategory.id}>
                                        <td>{serviceCategory.serviceCategoryName}</td>
                                        <td>{serviceCategory.popularity}</td>
                                        <td>
                                            <button
                                                className="add_button btn btn-warning mx-1"><MdEdit/></button>
                                            <button
                                                className="add_button btn btn-danger mx-1"><MdDelete/></button>
                                        </td>
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