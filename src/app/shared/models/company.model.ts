import { CompanyAssessment } from "./company-assessment.model";
import { User } from "./user.model";

export interface ICompany {
  id: string;
  name: string;
  incorporationNumber: string;
  logoUrl: string;
  industry: string;
  Assessments: Array<CompanyAssessment>;
  Trustees: Array<User>;
}
export class Company implements ICompany {
  constructor(
    public id: string,
    public name: string,
    public incorporationNumber: string,
    public logoUrl: string,
    public industry: string,
    public Assessments: Array<CompanyAssessment>,
    public Trustees: Array<User>
  ) {}
}
