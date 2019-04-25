import React from 'react';

import ServiceCategotyLineItem from "./ServiceCategoryLineItem";
import ServiceCategoryInputLine from "./ServiceCategoryInputLine";

const ServiceCategoryTable = props =>
    <div id="main_table">
        <h3>Service Categories</h3>
        <table className="table">
            <thead>
                <tr key="Title">
                    <th>Category</th>
                    <th>Popularity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <ServiceCategoryInputLine
                    new_entry={props.new_entry}
                    updateInput={props.updateInput}
                    createNewCategory={props.createNewCategory}
                    updateExistingCategory={props.updateExistingCategory} />

                {
                    props.serviceCategories
                        .map(serviceCategory =>
                            <ServiceCategotyLineItem
                                itemid={serviceCategory.id}
                                serviceCategoryName={serviceCategory.serviceCategoryName}
                                popularity={serviceCategory.popularity}
                                selectForEdit={props.selectForEdit}
                                deleteCategory={props.deleteCategory} />

                        )
                }
            </tbody>
        </table>
    </div>

export default ServiceCategoryTable; 