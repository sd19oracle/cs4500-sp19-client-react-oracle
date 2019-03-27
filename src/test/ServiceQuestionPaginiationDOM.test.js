import React from 'react'
import NumberButton from '../components/NumberButtons'
import QuestionsContainer from '../components/QuestionsContainer'
import TestRenderer from 'react-test-renderer'
import ServiceQuestionService from '../services/ServiceQuestionService'
const serviceQuestionService = ServiceQuestionService.getInstance();
import '../services/pagination.mock'


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