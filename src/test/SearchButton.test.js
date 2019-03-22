import React from 'react'
import TestRenderer from 'react-test-renderer';
import SearchButton from '../components/SearchButton'

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

