import React from "react";
import { MdAdd, MdSave} from "react-icons/md";

const ServiceCategoryInputLine = props =>
    <tr>
        <td>
            <input
                type="text"
                name="serviceCategoryName"
                placeholder="Name"
                value={props.new_entry.serviceCategoryName}
                onChange={props.updateInput}
                className={"form-control ml-1"}
            ></input>
        </td>
        <td>
            <input
                type="text"
                name="popularity"
                placeholder="Popularity Value"
                value={props.new_entry.popularity}
                onChange={props.updateInput}
                className={"form-control ml-1"}
            ></input>
        </td>
        <td>
            <div>
                <button
                    className="add_button btn btn-primary mx-1"
                    onClick={props.createNewCategory}><MdAdd /></button>
                <button
                    className="add_button btn btn-success mx-1"
                    onClick={props.updateExistingCategory}><MdSave /></button>
            </div>
        </td>
    </tr>

export default ServiceCategoryInputLine;