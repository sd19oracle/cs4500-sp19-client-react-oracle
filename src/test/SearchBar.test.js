import React from 'react'
import TestRenderer from 'react-test-renderer';
import SearchBar from '../components/SearchBar/SearchBar'
import ServiceProviderList from '../components/ProvidersPage/ServiceProviderList'
import OneList from "../data/speicifically_matched_provider.mock.json"
import ProviderListData from '../data/provider_list.mock.json'

// Snapshot testing
test('basic test', () => {
    const testRenderer = TestRenderer.create(
        <SearchBar name=""
                    zip="0"/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});


// Snapshot testing
test('basic test2', () => {
    const testRenderer = TestRenderer.create(
        <SearchBar name=""
                    zip="02115"/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});


// Snapshot testing
test('basic test3', () => {
    const testRenderer = TestRenderer.create(
        <SearchBar name="jordan"
                    zip="02115"/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});


// DOM testing
test('rendering results on provders page', () => {
    const testRenderer = TestRenderer.create(
        <ServiceProviderList serviceProviders={ProviderListData}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    const categoryLink = testInstance.findAllByProps({className: 'col-7 providerInfo'});
    expect(categoryLink.length).toBe(4);
});


// DOM testing
test('rendering results on provders page', () => {
    const testRenderer = TestRenderer.create(
        <ServiceProviderList serviceProviders={ProviderListData}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    const categoryLink = testInstance.findAllByProps({className: 'col-3 ViewButton'});
    expect(categoryLink.length).toBe(4);
});

// DOM testing
test('rendering results on provders page', () => {
    const testRenderer = TestRenderer.create(
        <ServiceProviderList serviceProviders={ProviderListData}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    const categoryLink = testInstance.findAllByProps({className: 'ProviderAnswers'});
    expect(categoryLink.length).toBe(4);
});


// DOM testing
test('rendering results on provders page for speicifically matched', () => {
    const testRenderer = TestRenderer.create(
        <ServiceProviderList serviceProviders={OneList}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    const categoryLink = testInstance.findAllByProps({className: 'ProviderAnswers'});
    expect(categoryLink.length).toBe(1);
});