import React from 'react';
import { MdAdd, MdSave, MdEdit, MdDelete } from "react-icons/md"

const ServiceCategoryLineItem = svccatitem =>
    <tr key={svccatitem.itemid}>
        <td>{svccatitem.serviceCategoryName}</td>
        <td>{svccatitem.popularity}</td>
        <td>
            <button
                className="add_button btn btn-warning mx-1"
                onClick={(e) => { svccatitem.selectForEdit(svccatitem.itemid) }}><MdEdit /></button>
            <button
                className="add_button btn btn-danger mx-1"
                onClick={(e) => { svccatitem.deleteCategory(svccatitem.itemid) }}><MdDelete /></button>
        </td>
    </tr>

export default ServiceCategoryLineItem;