import React from "react";

export default props => {

return <select onChange={props.change_page_size}>
                    {props.default_page_item.map((x, index) =>
                        <option key={index} value={x}> {x} </option>)}
                </select>

}