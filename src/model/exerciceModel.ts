export class ExerciceModel {
  id: number;
  question: string;
  category: string;
  firstAnswer: string;
  secondAnswer: string;
  thirdAnswer: string;

  constructor(id: number, question: string, category: string, firstAnswer: string, secondAnswer: string, thirdAnswer: string) {
    this.id = id;
    this.question = question;
    this.category = category;
    this.firstAnswer = firstAnswer;
    this.secondAnswer = secondAnswer;
    this.thirdAnswer = thirdAnswer;
  }
}
