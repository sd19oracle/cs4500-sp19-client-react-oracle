import React from 'react'
import TestRenderer from 'react-test-renderer';
import SearchButton from '../components/SearchButton'
import '../services/ServiceQuestionService.mock'

// snapshot testing for the search button when searchButtonOn
// is set to true
test('search button initial rendering', () => {
    const testRenderer = TestRenderer.create(
        <SearchButton searchButtonOn={true}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot()
});

// snapshot testing for the search button when searchButtonOn
// is set to false
test('search button clear search rendering', () => {
    const testRenderer = TestRenderer.create(
        <SearchButton searchButtonOn={false}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot()
});

// snapshot testing for checking if the text on the button
// is switched from Search to Clear Search when clicked
test('on-click event handler - toggle search', (done) => {
    let searchButtonOn = true;
    let toggleSearchFunc = () => {
        searchButtonOn = false;
        const testRenderer = TestRenderer.create(
            <SearchButton searchButtonOn={searchButtonOn} toggleSearch={toggleSearchFunc}/>
        );
        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        done()
    };

    const testRenderer = TestRenderer.create(
        <SearchButton searchButtonOn={searchButtonOn} toggleSearch={toggleSearchFunc}/>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    const searchButton = testInstance.findByProps({className: 'search-button'});
    searchButton.props.onClick();
});

// DOM testing for validating the number of search buttons
// shown on the screen
test('DOM testing', () => {
    const testRenderer = TestRenderer.create(
        <SearchButton searchButtonOn={true}/>
    );

    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();

    const testInstance = testRenderer.root;
    const searchButton = testInstance.findAllByProps({className: 'search-button'});
    expect(searchButton.length).toBe(1)
});
