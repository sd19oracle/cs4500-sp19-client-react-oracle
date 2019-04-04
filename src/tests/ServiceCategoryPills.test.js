import React from "react";
import ServicesCategoryPills from '../components/ServiceCategoryPills/ServiceCategoryPills'
import renderer from "react-test-renderer";
import Enzyme, {configure, mount, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Snapshot test
test("render correct for Category Pills", () => {
    const tree = renderer
      .create(<ServicesCategoryPills />)
      .toJSON();
    expect(tree).toMatchSnapshot();
});

// DOM test
it('The first text in li', () => {
    const wrapper = shallow(<ServicesCategoryPills/>);
    const titleInput = wrapper.find("a").at(0);
    console.log(titleInput)
    expect(titleInput.text()).toBe("<GiBarracks />Home")
});
  
it('The second text in li', () => {
    const wrapper = shallow(<ServicesCategoryPills/>);
    const titleInput = wrapper.find("a").at(1);
    console.log(titleInput)
    expect(titleInput.text()).toBe("<GiSpikedDragonHead />Pets")
});

it('The third text in li', () => {
    const wrapper = shallow(<ServicesCategoryPills/>);
    const titleInput = wrapper.find("a").at(2);
    console.log(titleInput)
    expect(titleInput.text()).toBe("<GiTechnoHeart />Wellness")
});
      
it('The forth text in li', () => {
    const wrapper = shallow(<ServicesCategoryPills/>);
    const titleInput = wrapper.find("a").at(3);
    console.log(titleInput)
    expect(titleInput.text()).toBe("<GiBank />Business")
});
  
it('The fifth text in li', () => {
    const wrapper = shallow(<ServicesCategoryPills/>);
    const titleInput = wrapper.find("a").at(4);
    console.log(titleInput)
    expect(titleInput.text()).toBe("<GiDiceTwentyFacesTwenty />More")
})
      