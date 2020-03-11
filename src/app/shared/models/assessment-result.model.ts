import { AssessmentQuestion } from './assessment-questions.model';
import { ReviewAnswer } from './review-answer.model';

export interface IAssessmentResult{
    overallScore:number
    avgScore:number
    questionsAnswered:number
    lowestReview:string
    highestReview:string
    userName:string
    assessmentTitle:string
    companyName:string
    unansweredQuestions:Array<AssessmentQuestion>
    answers:Array<ReviewAnswer>
    dateSubmitted: string
    linkToPdf:string
}
export class AsessmentResult {
    constructor(
        public overallScore:number,
        public avgScore:number,
        public questionsAnswered:number,
        public lowestReview:string,
        public highestReview:string,
        public userName:string,
        public assessmentTitle:string,
        public companyName:string,
        public unansweredQuestions:Array<AssessmentQuestion>,
        public answers:Array<ReviewAnswer>,
        public dateSubmitted: string,
        public linkToPdf:string
    ) {}
}