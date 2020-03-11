import { Company } from './company.model';
import { ReviewAnswer } from './review-answer.model';


export interface ICompanyAssessment {
    id:string;
    companyId:string
    title:string
    description:string
    totalTrustees:number
    totalSubmissions:number
    lastSubmitee: string
    lastSubmission: number
    maxVoteValue: number
    minVoteValue: number
    startPeriod:number
    endPeriod:number
    status: string
    Company: Company
    Answers: ReviewAnswer[]
}
export class CompanyAssessment implements ICompanyAssessment {
    id: string;
    companyId: string;
    title: string;
    description: string;
    totalTrustees: number;
    totalSubmissions: number;
    lastSubmitee: string;
    lastSubmission: number;
    maxVoteValue: number;
    minVoteValue: number;
    startPeriod: number;
    endPeriod: number;
    status: string;
    Company: Company;
    Answers: ReviewAnswer[];
    
}