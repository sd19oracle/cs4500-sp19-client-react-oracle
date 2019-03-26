import React from 'react'
import PrevButton from '../components/PrevButton'
import NextButton from '../components/NextButton'
import NumberButton from '../components/NumberButtons'
import PageSizeSlection from '../components/PageSizeSelection'
import TestRenderer from 'react-test-renderer'
import ServiceQuestionService from '../services/ServiceQuestionService'
const serviceQuestionService = ServiceQuestionService.getInstance()
import '../services/pagination.mock'

test('PageSizeSelection render correctly', () => {
    const testRenderer = TestRenderer.create(
        <PageSizeSlection
        default_page_item={[10,20,50,'all']}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const first_size = testInstance.findByProps({className: '10-selection'})
    const second_size = testInstance.findByProps({className: '20-selection'})
    const third_size = testInstance.findByProps({className: '50-selection'})
    const fourth = testInstance.findByProps({className: 'all-selection'})

    expect (first_size.props.value).toBe(10)
    expect (second_size.props.value).toBe(20)
    expect (third_size.props.value).toBe(50)
    expect (fourth.props.value).toBe('all')
})

test('prevButton render correctly', () => {
    const testRenderer = Testrenderer.create( 
        <PrevButton
        
        />
    )
})