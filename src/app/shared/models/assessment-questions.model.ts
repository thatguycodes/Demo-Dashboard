export interface IAssessmentQuestion {
    id:string;
    title:string; 
    sectionId:string
    index:number;
}
export class AssessmentQuestion {
    constructor (
        public id: string,
        public title: string,
        public sectionId: string,
        public index: number
    ) {}
}