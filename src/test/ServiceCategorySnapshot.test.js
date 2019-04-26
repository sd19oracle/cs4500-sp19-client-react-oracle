import React from "react";
import renderer from "react-test-renderer";
import svcCatPageZero from "../data/service-categories-page0.mock"
import ServiceCategoryTable from "../components/ServiceCategoryTable";

test("snapshots matching", () => {
    const component = renderer.create(
        <ServiceCategoryTable
            serviceCategories={svcCatPageZero.content}
            new_entry={{ serviceCategoryName: "", popularity: "", icon: "", id: -1 }} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})

test("snapshots matching", () => {
    var new_entry = { serviceCategoryName: "Hello Hello", popularity: 45, icon: "", id: -1 };
    const component = renderer.create(
        <ServiceCategoryTable
            serviceCategories={svcCatPageZero.content}
            new_entry={new_entry} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})