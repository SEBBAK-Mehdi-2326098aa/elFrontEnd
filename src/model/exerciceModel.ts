export class ExerciceModel {
  id: number;
  question: string;
  category: string;
  firstAnswer: string;
  secondAnswer: string;
  thirdAnswer: string;
  answer: string;
  difficulty: string;
  isAnswered: boolean = false;

  constructor(id: number, question: string, category: string, firstAnswer: string, secondAnswer: string, thirdAnswer: string, answer: string, difficulty: string, isAnswered: boolean) {
    this.id = id;
    this.question = question;
    this.category = category;
    this.firstAnswer = firstAnswer;
    this.secondAnswer = secondAnswer;
    this.thirdAnswer = thirdAnswer;
    this.answer = answer;
    this.difficulty = difficulty;
    this.isAnswered = isAnswered;
  }
}
