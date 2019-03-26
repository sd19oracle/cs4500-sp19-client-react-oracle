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
        const testRenderer = TestRenderer.create(
            <NextButton
                next_button_state={"disabled"}
                current_page={3}
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
            current_page={3}
            page_num={3}
            next_button_click={go_next_page}
        />
    )
    let tree = testRenderer.toJSON()
    expect(tree).toMatchSnapshot()

    const testInstance = testRenderer.root

    const next_button = testInstance.findByProps({ className: 'next-button' })
    next_button.props.onClick()
    // When current page is equal to the total page, the next button should be disabled
    expect(next_button.props.disabled).toBe('disabled')
})

// DOM testing and sort of snapshot for rendering correct number of num button for the first page
test('render num buttons correctly for the first page', () => {
    return serviceQuestionService.findAPage(10, 0)
        .then(content => {
            const testRenderer = TestRenderer.create(
                <NumberButton
                    page_num={content.totalPages}
                    current_page={content.pageable.pageNumber + 1}
                />
            )
            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const testInstance = testRenderer.root

            // since there are 2 total page, so there should be only 2 buttons
            const number_buttons = testInstance.findAllByType("button")
            expect(number_buttons.length).toBe(2);


            const first_button = testInstance.findByProps({ className: '1-button' })
            const second_button = testInstance.findByProps({ className: '2-button' })

            expect(first_button.props.id).toBe(1);
            // fist button should be selected and highlightened 
            expect(first_button.props.style).toEqual({"backgroundColor": "#69adfc", "opacity": 0.8})
            expect(second_button.props.id).toBe(2);
        })
})

// DOM testing and sort of snapshot testing for rendering correct number of num button for the second page
test('render num buttons correctly for the second page', () => {
    return serviceQuestionService.findAPage(10, 1)
        .then(content => {
            const testRenderer = TestRenderer.create(
                <NumberButton
                    page_num={content.totalPages}
                    current_page={content.pageable.pageNumber + 1}
                />
            )
            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const testInstance = testRenderer.root

            // since there are 2 total page, so there should be only 2 buttons
            const number_buttons = testInstance.findAllByType("button")
            expect(number_buttons.length).toBe(2);

            const first_button = testInstance.findByProps({ className: '1-button' })
            const second_button = testInstance.findByProps({ className: '2-button' })

            expect(first_button.props.id).toBe(1);
            expect(second_button.props.id).toBe(2);
            // the second button should selected and highlightened
            expect(second_button.props.style).toEqual({"backgroundColor": "#69adfc", "opacity": 0.8})
        })
})

// DOM testing and sort of snapshot testing for generating the first page
test("rendering first page correctly with selected page size", () => {
    return serviceQuestionService.findAPage(10, 0)
        .then(content => {
            const testRenderer = TestRenderer.create(
                <QuestionsContainer
                serviceQuestions={content.content}
                />
            )

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const testInstance = testRenderer.root
            // total ten questions
            const number_quetions = testInstance.findAllByType("tr")
            expect(number_quetions.length).toBe(10);

            // first questions check
            const first_question = testInstance.findByProps({className:"88-tr"})
            expect(first_question.props.value).toBe(88);
            // last question check
            const last_question = testInstance.findByProps({className:"144-tr"})
            expect(last_question.props.value).toBe(144);
        })
})

// DOM testing and sort of snapshot testing for generating the second page
test("rendering second page correctly with selected page size", () => {
    return serviceQuestionService.findAPage(10, 1)
        .then(content => {
            const testRenderer = TestRenderer.create(
                <QuestionsContainer
                serviceQuestions={content.content}
                />
            )

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const testInstance = testRenderer.root
            // total ten questions
            const number_quetions = testInstance.findAllByType("tr")
            expect(number_quetions.length).toBe(1);

            // first questions check
            const first_question = testInstance.findByProps({className:"168-tr"})
            expect(first_question.props.value).toBe(168);
        })
})

// DOM testing and sort of snapshot testing for generating the empty page
test("rendering empty page correctly with selected page size", () => {
    return serviceQuestionService.findAPage(10, 2)
        .then(content => {
            const testRenderer = TestRenderer.create(
                <QuestionsContainer
                serviceQuestions={content.content}
                />
            )

            let tree = testRenderer.toJSON()
            expect(tree).toMatchSnapshot()

            const testInstance = testRenderer.root
            // total ten questions
            const number_quetions = testInstance.findAllByType("tr")
            expect(number_quetions.length).toBe(0);
        })
})