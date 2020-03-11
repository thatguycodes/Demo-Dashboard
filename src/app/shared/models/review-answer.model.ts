import { AssessmentQuestion } from "./assessment-questions.model";

export interface IReviewAnswer {
  id: string;
  questionId: string;
  assessmentId: string;
  userId: string;
  value: number;
  timeAnswered: number;
  index: number;
  Question?: AssessmentQuestion;
}
export class ReviewAnswer implements IReviewAnswer {
  constructor(
    public id: string,
    public questionId: string,
    public assessmentId: string,
    public userId: string,
    public value: number,
    public timeAnswered: number,
    public index: number,
    public Question?: AssessmentQuestion
  ) {}
}
