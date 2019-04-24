import ServiceQuestionService from '../services/ServiceQuestionService'
const serviceQuestionService = ServiceQuestionService.getInstance();
import '../services/pagination.mock'

// mock service testing for the first page
test("first page", () => {
    return serviceQuestionService.findAPage(10, 0)
        .then(content => {
            expect(content).toBeDefined();
            expect(content.content.length).toBe(10);
            expect(content.content).toContainEqual(
                { "choice": "CS,CE,IS,others", "id": 88, "title": "What classes can you teach?", "type": "MUTIPLECHOICE" },
                { "choice": "1.no2.yes", "id": 123, "title": "Are you allergic to pollen?", "type": "TRUEFALSE" },
                { "choice": "BS/BA,MS/MA,PhD,others", "id": 124, "title": "What is your education level?", "type": "MUTIPLECHOICE" },
                { "choice": "", "id": 127, "title": "What is best way to contact you?", "type": "SHORTANSWER" },
                { "choice": "", "id": 130, "title": "test question 3", "type": "SHORTANSWER" },
                { "choice": "", "id": 136, "title": "kk", "type": "SHORTANSWER" },
                { "choice": "", "id": 137, "title": "Do you have pet(s)?", "type": "TRUEFALSE" },
                { "choice": "", "id": 139, "title": "test for fun", "type": "MINMAX" },
                { "choice": "", "id": 143, "title": "TESTNOREASON", "type": "MUTIPLECHOICE" },
                { "choice": "", "id": 144, "title": "hello", "type": "TRUEFALSE" }
            )
            expect(content.content[0]).toEqual(
                {
                    "choice": "CS,CE,IS,others", "id": 88,
                    "title": "What classes can you teach?",
                    "type": "MUTIPLECHOICE"
                }
            )
            expect(content.content[9]).toEqual(
                { "choice": "", "id": 144, "title": "hello", "type": "TRUEFALSE" }
            )
            expect(content.totalPages).toEqual(2);
            expect(content.pageable.pageNumber).toEqual(0);

        })
})



// mock service testing for going to the next page
test('Goes to the next page', () => {

    return serviceQuestionService.findAPage(10, 1)
        .then(content => {
            expect(content).toBeDefined();
            expect(content.content.length).toBe(1);
            expect(content.content).toContainEqual(
                { "choice": "", "id": 168, "title": "ssg", "type": "MINMAX" }
            )
            expect(content.content[0]).toEqual(
                { "choice": "", "id": 168, "title": "ssg", "type": "MINMAX" }
            )
            expect(content.totalPages).toEqual(2);
            expect(content.pageable.pageNumber).toEqual(1);
        })
})

// mock service testing for an empty page
test('Empty page', () => {
    return serviceQuestionService.findAPage(10, 2)
        .then(content => {
            expect(content).toBeDefined();
            expect(content.content.length).toBe(0);
            expect(content.totalPages).toEqual(2);
            expect(content.pageable.pageNumber).toEqual(2);
        })
})