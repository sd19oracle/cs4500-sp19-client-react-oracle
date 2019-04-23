import React from 'react'
import TestRenderer from 'react-test-renderer';
import SearchBar from '../components/SearchBar/SearchBar'
import providerList from '../components/ProvidersPage/ServiceProviderList'
import SearchBarComponent from '../components/SearchBar/SearchBarContainer'
import ProviderList from '../data/provider_list.mock.json'

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
        <providerList providerList={ProviderList}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
});