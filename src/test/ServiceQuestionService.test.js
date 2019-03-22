import React from 'react'
import ServiceQuestionService from '../services/ServiceQuestionService'
import '../services/ServiceQuestionService.mock'

const serviceQuestionService = ServiceQuestionService.getInstance();

test('fetch all service questions', () => {
    return serviceQuestionService.findAllServiceQuestions()
        .then(questions => {
            expect(questions).toBeDefined();
            expect(questions.length).toBe(11);
        });
});

// Test if calling findServiceQuestionsByFilter will invoke
// fetch with a post request which takes in a service question object
// and send back a filtered list of questions as a response.
// (p.s. since the frontend doesn't take care of the filtering
// logic, we didn't fully implement the logic in the mock service.
// We only implemented a partial logic for returning a list of filtered
// questions by title only for the sake of testing and simplicity.)
test('filter service questions based on title', () => {
    return serviceQuestionService.findServiceQuestionsByFilter({
        title: "education", type: "", choice: ""
    }).then(filteredQuestions => {
        expect(filteredQuestions).toBeDefined();
        expect(filteredQuestions.length).toBe(1);
        expect(filteredQuestions).toContainEqual({
            "id": 3,
            "title": "What is your education level?",
            "type": "MUTIPLECHOICE",
            "choice": "BS/BA,MS/MA,PhD,others"
        })
    })
});