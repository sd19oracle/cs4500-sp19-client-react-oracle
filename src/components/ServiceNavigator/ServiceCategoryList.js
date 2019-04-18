import React from 'react';
import {Link} from "react-router-dom";

const ServiceCategoryList = ({serviceCategories, catId}) =>
  <ul className="list-group">
    {
      serviceCategories.map(serviceCategory =>
          <Link  key={serviceCategory.id}
                 className={"list-group-item no-border " + (catId == serviceCategory.id ? "active" : "")}
                 to={`/services/${serviceCategory.id}`}>
            {serviceCategory.serviceCategoryName}
          </Link>
      )
    }
  </ul>;

export default ServiceCategoryList
