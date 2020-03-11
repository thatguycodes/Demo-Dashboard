import { CompanyAssessment } from './company-assessment.model';
import { RosterItem } from './roster-item.model';

export interface IAssessmentRoster{
    pendingAssessments:RosterItem[];
    completedAssessments:CompanyAssessment[];
}
export class AssessmentRoster {
    constructor(
        public pendingAssessments:RosterItem[],
        public completedAssessments:CompanyAssessment[]
    ) {}
}
