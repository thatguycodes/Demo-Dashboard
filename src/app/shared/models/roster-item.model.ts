export interface IRosterItem {
  assessmentName: string;
  assesmentId: string;
  totalQuestions: number;
  questionsAnswered: number;
  percentageComplete: string;
}
export class RosterItem implements IRosterItem {
  constructor(
    public assessmentName: string,
    public assesmentId: string,
    public totalQuestions: number,
    public questionsAnswered: number,
    public percentageComplete: string
  ) {}
}
