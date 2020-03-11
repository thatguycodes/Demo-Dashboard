import { AssessmentQuestion } from './assessment-questions.model';

export interface IAssessmentSection {
    id:string;
    title:string; 
    index:number;
    Questions:Array<AssessmentQuestion>
}

export class AssessmentSection implements IAssessmentSection {
    constructor (
public id: string,
public title: string,
public index: number,
public Questions: Array<AssessmentQuestion>
    ) {}
}