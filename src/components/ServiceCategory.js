import React from 'react'
import ServiceCategoryService from '../services/ServiceCategoryService'
import { MdAdd, MdSave, MdEdit, MdDelete } from "react-icons/md"
class ServiceCategories extends React.Component {
    constructor(props) {
        super(props)
        this.serviceCategoryService = ServiceCategoryService.getInstance()
        this.state = {
            serviceCategories: [],
            total_entries: 0,
            new_entry: { serviceCategoryName: "", popularity: "", icon: "", id: -1 },
            itemsPerPage: 2
        }
        this.createNewCategory = this.createNewCategory.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.selectForEdit = this.selectForEdit.bind(this);
        this.updateExistingCategory = this.updateExistingCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.pgup = this.pgup.bind(this);
        this.pgdn = this.pgdn.bind(this);
        this.setIpp = this.setIpp.bind(this);
    }

    componentDidMount() {
        this.serviceCategoryService
            .findPageOfServiceCategories(0, this.state.itemsPerPage)
            .then(pagedMetadata =>
                this.setState({
                    metadata: pagedMetadata,
                    serviceCategories: pagedMetadata.content
                })
            )
    }

    createNewCategory() {
        if (this.state.new_entry.serviceCategoryName === "" || this.state.new_entry.popularity === "") {
            alert("New Category Name or Popularity Value can't be Blank")
        } else {
            this.serviceCategoryService.createServiceCategory(this.state.new_entry)
                .then(() => {
                    this.serviceCategoryService
                        .findPageOfServiceCategories(0, this.state.itemsPerPage)
                        .then(pagedMetadata =>
                            this.setState({
                                metadata: pagedMetadata,
                                serviceCategories: pagedMetadata.content
                            })
                        )
                    this.setState({ new_entry: { serviceCategoryName: "", popularity: "", icon: "", id: -1 } })
                })
        }
    }

    updateExistingCategory() {
        this.serviceCategoryService.updateServiceCategory(this.state.new_entry)
            .then(() => {
                this.setState({ new_entry: { serviceCategoryName: "", popularity: "", icon: "", id: -1 } })
                console.log(this.state.serviceCategories)
            })
            .then(() => {
                this.serviceCategoryService
                    .findPageOfServiceCategories(0, this.state.itemsPerPage)
                    .then(pagedMetadata =>
                        this.setState({
                            metadata: pagedMetadata,
                            serviceCategories: pagedMetadata.content
                        })
                    )
            });
    }

    deleteCategory(id) {
        this.serviceCategoryService.deleteServiceCategoryById(id)
            .then(() => {
                this.serviceCategoryService
                    .findPageOfServiceCategories(0, this.state.itemsPerPage)
                    .then(pagedMetadata =>
                        this.setState({
                            metadata: pagedMetadata,
                            serviceCategories: pagedMetadata.content
                        })
                    )
            });
    }

    selectForEdit(id) {
        console.log(id)
        for (var i in this.state.serviceCategories) {
            if (this.state.serviceCategories[i].id === id) {
                var entry = this.state.serviceCategories[i];
                break
            }
        }

        this.setState(prevState => ({
            new_entry: {
                ...prevState.new_entry,
                id: entry.id,
                serviceCategoryName: entry.serviceCategoryName,
                popularity: entry.popularity,
                icon: entry.icon,
            }
        }))
    }

    updateInput(e) {
        const target = e.currentTarget;
        const value = target.value;
        const name = target.name
        this.setState(prevState => ({
            new_entry: {
                ...prevState.new_entry,
                [name]: value
            }
        }))
        console.log(this.state.new_entry);
    }

    pgup(e) { 
        e.preventDefault();
        if (this.state.metadata.first) return;
        this.serviceCategoryService
            .findPageOfServiceCategories(this.state.metadata.pageable.pageNumber - 1, this.state.itemsPerPage)
            .then(pagedMetadata =>
                this.setState({
                    metadata: pagedMetadata,
                    serviceCategories: pagedMetadata.content
                })
            )

    }
    
    pgdn(e) { 
        e.preventDefault();
        if (this.state.metadata.last) return;
        this.serviceCategoryService
            .findPageOfServiceCategories(this.state.metadata.pageable.pageNumber + 1, this.state.itemsPerPage)
            .then(pagedMetadata =>
                this.setState({
                    metadata: pagedMetadata,
                    serviceCategories: pagedMetadata.content
                })
            )

    }

    setIpp(e) { 
        //console.log(e.currentTarget.value)
        this.setState({ itemsPerPage: e.currentTarget.value });
        console.log(this.state.itemsPerPage)
        this.serviceCategoryService
            .findPageOfServiceCategories(0, e.currentTarget.value)
            .then(pagedMetadata =>
                this.setState({
                    metadata: pagedMetadata,
                    serviceCategories: pagedMetadata.content,
                })
            )
    }

    render() {
        let prev = "page-item";
        let next = "page-item";
        if (this.state.metadata && this.state.metadata.first) prev += " disabled";
        if (this.state.metadata && this.state.metadata.last) next += " disabled";
        return (
            <div>
                <div id="main_table">
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
                                        type="text"
                                        name="serviceCategoryName"
                                        placeholder="Name"
                                        value={this.state.new_entry.serviceCategoryName}
                                        onChange={this.updateInput}
                                        className={"form-control ml-1"}
                                    ></input>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="popularity"
                                        placeholder="Popularity Value"
                                        value={this.state.new_entry.popularity}
                                        onChange={this.updateInput}
                                        className={"form-control ml-1"}
                                    ></input>
                                </td>
                                <td>
                                    <div>
                                        <button
                                            className="add_button btn btn-primary mx-1"
                                            onClick={this.createNewCategory}><MdAdd /></button>
                                        <button
                                            className="add_button btn btn-success mx-1"
                                            onClick={this.updateExistingCategory}><MdSave /></button>
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
                                                    className="add_button btn btn-warning mx-1"
                                                    onClick={(e) => this.selectForEdit(serviceCategory.id)}><MdEdit /></button>
                                                <button
                                                    className="add_button btn btn-danger mx-1"
                                                    onClick={(e) => this.deleteCategory(serviceCategory.id)}><MdDelete /></button>
                                            </td>
                                        </tr>
                                    )
                            }
                        </tbody>
                    </table>
                </div>
                <div id="page-control" className="d-flex flex-row align-baseline">
                    <select
                        className="form-control mx-1"
                        value={this.state.itemsPerPage}
                        onChange={this.setIpp}
                        style={{ width: "3rem" }}>
                        <option value="2">2</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    <div className="mx-1">Per Page</div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className={prev}><button className="page-link" onClick={this.pgup}>Previous</button></li>
                            <li className={prev}><button className="page-link" onClick={this.pgup}>{this.state.metadata && this.state.metadata.pageable.pageNumber}</button></li>
                            <li className="page-item active"><button className="page-link">{this.state.metadata && this.state.metadata.pageable.pageNumber + 1}</button></li>
                            <li className={next}><button className="page-link" onClick={this.pgdn}>{this.state.metadata && this.state.metadata.pageable.pageNumber + 2}</button></li>
                            <li className={next}><button className="page-link" onClick={this.pgdn}>Next</button></li>
                        </ul>
                    </nav>
                    {/*
                    <div class="btn-group page-button-group" role="group">
                        <button
                            type="button"
                            className={prev + " btn btn-secondary"}
                            onClick={console.log("!")}>
                            Prev
                        </button>
                        <button
                            type="button"
                            className={next + " btn btn-secondary"}
                            onClick={console.log("!!")}>
                            {this.state.metadata && this.state.metadata.pageable.pageNumber + 1}
                        </button>
                        <button
                            type="button"
                            className={next + " btn btn-secondary"}
                            onClick={console.log("!!")}>
                            Next
                        </button>
                    </div>
                    */}
                </div>
            </div>

        )
    }
}

export default ServiceCategories