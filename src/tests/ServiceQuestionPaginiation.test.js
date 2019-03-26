import React from 'react'
import PrevButton from '../components/PrevButton'
import NextButton from '../components/NextButton'
import NumberButton from '../components/NumberButtons'
import PageSizeSlection from '../components/PageSizeSelection'
import QuestionsContainer from '../components/QuestionsContainer'
import TestRenderer from 'react-test-renderer'
import ServiceQuestionService from '../services/ServiceQuestionService'
const serviceQuestionService = ServiceQuestionService.getInstance();
import '../services/pagination.mock'


// snapshot testing and sort of DOM testing for page size selection menu
test('PageSizeSelection render correctly', () => {
    const testRenderer = TestRenderer.create(
        <PageSizeSlection
            default_page_item={[10, 20, 50, 'all']}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const first_size = testInstance.findByProps({ className: '10-selection' })
    const second_size = testInstance.findByProps({ className: '20-selection' })
    const third_size = testInstance.findByProps({ className: '50-selection' })
    const fourth = testInstance.findByProps({ className: 'all-selection' })

    expect(first_size.props.value).toBe(10)
    expect(second_size.props.value).toBe(20)
    expect(third_size.props.value).toBe(50)
    expect(fourth.props.value).toBe('all')
})

// snapshot for prev button when it is disabled
test('prevButton if button state is disabled render correctly', () => {
    const testRenderer = TestRenderer.create(
        <PrevButton
            prev_button_state={"disabled"}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const prev_button = testInstance.findByProps({ className: 'prev-button' })
    expect(prev_button.props.disabled).toBe("disabled")
})


// snapshot test for prev button when it is enabled
test('prevButton if button state is enabled render correctly', () => {
    const testRenderer = TestRenderer.create(
        <PrevButton
            prev_button_state={""}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const prev_button = testInstance.findByProps({ className: 'prev-button' })
    expect(prev_button.props.disabled).toBe("")
})


// snapshot test for next button when it is disabled
test('nextButton if button state is disabled render correctly', () => {
    const testRenderer = TestRenderer.create(
        <NextButton
            next_button_state={"disabled"}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const next_button = testInstance.findByProps({ className: 'next-button' })
    expect(next_button.props.disabled).toBe("disabled")
})


// snapshot test for next button when it is enabled
test('nextButton if button state is enabled render correctly', () => {
    const testRenderer = TestRenderer.create(
        <NextButton
            next_button_state={""}
            current_page={1}
            page_num={3}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const next_button = testInstance.findByProps({ className: 'next-button' })
    expect(next_button.props.disabled).toBe("")
})

// sanpshot test for prev button when it is the first page
test('prevButton is disabled for the first page', () => {
    const testRenderer = TestRenderer.create(
        <PrevButton
            prev_button_state={""}
            currentpage={1}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const prev_button = testInstance.findByProps({ className: 'prev-button' })
    expect(prev_button.props.disabled).toBe("disabled")
})

// snapshot test for next button is pressed
test('nextButton is pressed', (done) => {
    let go_next_page = () => {
        let current_page = 1;
        const testRenderer = TestRenderer.create(
            <NextButton
                next_button_state={""}
                current_page={current_page + 1}
                page_num={3}
                next_button_click={go_next_page}
            />
        );
        let tree = testRenderer.toJSON()
        expect(tree).toMatchSnapshot()

        done()
    };

    const testRenderer = TestRenderer.create(
        <NextButton
            next_button_state={""}
            current_page={2}
            page_num={3}
            next_button_click={go_next_page}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const next_button = testInstance.findByProps({ className: 'next-button' })
    next_button.props.onClick()
})

// DOM testing for the first page
// test("first page", )



// DOM testing for pressing the next button and go to the next page
test('Goes to the next page', () => {

    return serviceQuestionService.findAPage(10, 1)
        .then(content => {
            expect(content).toBeDefined();
            expect(content.content.length).toBe(1);
            expect(content.content).toContainEqual(
                [{"choice": "", "id": 168, "title": "ssg", "type": "MINMAX"}]
            )
        })
})