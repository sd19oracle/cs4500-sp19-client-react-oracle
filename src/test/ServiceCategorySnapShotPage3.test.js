import React from "react";
import renderer from "react-test-renderer";
import svcCatPageOne from "../data/service-categories-page1.mock.json"
import ServiceCategoryTable from "../components/ServiceCategoryTable";

test("snapshots matching", () => {
    const component = renderer.create(
        <ServiceCategoryTable
            serviceCategories={svcCatPageOne.content}
            new_entry={{ serviceCategoryName: "", popularity: "", icon: "", id: -1 }} />
    );
    let tree = component.toJSON();
    let root = component.root;
    expect(tree).toMatchSnapshot();
    expect(root.findAllByType("tr").length).toBe(3 + 2);
})

test("snapshots matching", () => {
    var new_entry = { serviceCategoryName: "Housing", popularity: 30, icon: "", id: -1 };
    const component = renderer.create(
        <ServiceCategoryTable
            serviceCategories={svcCatPageTwo.content}
            new_entry={new_entry} />
    );
    let tree = component.toJSON();
    let root = component.root;
    expect(tree).toMatchSnapshot();
    expect(root.findAllByType("input")[0].props.value).toBe("Housing");
    expect(root.findAllByType("input")[1].props.value).toBe(30);
    expect(root.findAllByType("input").length).toBe(2);
})