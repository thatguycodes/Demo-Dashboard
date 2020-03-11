import { CompanyAssessment } from './company-assessment.model';
import { ReviewAnswer } from './review-answer.model';
import { AssessmentQuestion } from './assessment-questions.model';
import { AssessmentSection } from './assessment-section.model';

export interface IAssessmentForm {
  assessment: CompanyAssessment;
  answers: ReviewAnswer[];
  unansweredQuestions: AssessmentQuestion[];
  sections: AssessmentSection[];
  progess: number;
}
export class AssessmentForm {
    constructor(
        public assessment: CompanyAssessment,
        public answers: ReviewAnswer[],
        public unansweredQuestion: AssessmentQuestion[],
        public sections: AssessmentSection[],
        public progess: number
    ) {}
}
