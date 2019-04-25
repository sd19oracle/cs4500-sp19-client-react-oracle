import "../services/ServiceCategoryService.mock"
import { MemoryRouter } from "react-router-dom";
import svccatmockdata from "../data/service-categories-page0.mock"
import React from 'react'
import renderer from 'react-test-renderer'
import ServiceCategoryService from "../services/ServiceCategoryService"
import ServiceCategoryTable from "../components/ServiceCategoryTable"
const serviceCategoryService = ServiceCategoryService.getInstance();

test("render correct # of entries (first page)", () => { 
    const component = renderer.create(
        <MemoryRouter>
            <ServiceCategoryTable
                serviceCategories={svccatmockdata.content}
                new_entry={{ serviceCategoryName: "", popularity: "", icon: "", id: -1 }}/>
        </MemoryRouter>
    );
    let root = component.root;
    console.log(root.findAllByType("tr"))
    expect(root.findAllByType("tr").length).toBe(9);
})

//test("count buttons of the DOM, should be ")