import React from "react";

export default props => {

return <select className='page-size-selection' onChange={props.change_page_size}>
                    {props.default_page_item.map((x, index) =>
                        <option className={x + '-selection'} key={index} value={x}> {x} </option>)}
                </select>

}