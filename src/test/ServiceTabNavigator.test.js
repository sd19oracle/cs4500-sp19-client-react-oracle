import React from 'react'
import TestRenderer from 'react-test-renderer';
import ServiceTabNavigator from '../components/ServiceTabNavigator/ServiceTabNavigator'
import popularServiceCategories from '../data/popular-service-categories.mock'

// Snapshot testing
test('basic test', () => {
    const testRenderer = TestRenderer.create(
        <ServiceTabNavigator services={popularServiceCategories}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});

// snapshot testing
test('empty service category test', () => {
    const testRenderer = TestRenderer.create(
        <ServiceTabNavigator services={[]}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});

// DOM testings
test('test popular services length', () => {
    const testRenderer = TestRenderer.create(
        <ServiceTabNavigator services={popularServiceCategories}/>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    const categoryLink = testInstance.findAllByProps({className: 'nav-link'});
    expect(categoryLink.length).toBe(10);
});

test('test nav tab length', () => {
    const testRenderer = TestRenderer.create(
        <ServiceTabNavigator services={popularServiceCategories}/>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    const navBarDom = testInstance.findAllByProps({className: 'nav nav-tabs'});
    expect(navBarDom.length).toBe(1);
});

