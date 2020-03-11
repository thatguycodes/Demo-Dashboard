export interface IScore {
  title: string;
  value: number;
}
export class Score implements IScore {
  constructor(public title: string, public value: number) {}
}
