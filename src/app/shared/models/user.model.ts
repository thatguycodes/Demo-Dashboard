import { Company } from "./company.model";
import { ReviewAnswer } from "./review-answer.model";
import { AssessmentRoster } from "./assessment-roster.model";

interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  published: boolean;
  companyId: string;
  idNumber: string;
  roster: AssessmentRoster;
  Company: Company;
  ReviewAnswers: ReviewAnswer[];
}
export class User implements IUser {
  constructor(
    public id: string,
    public firstname: string,
    public lastname: string,
    public username: string,
    public role: string,
    public published: boolean,
    public companyId: string,
    public idNumber: string,
    public roster: AssessmentRoster,
    public Company: Company,
    public ReviewAnswers: ReviewAnswer[]
  ) {}
}
