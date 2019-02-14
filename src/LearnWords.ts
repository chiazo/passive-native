import { WordImpl } from "./WordImpl";

export class LearnWords extends WordImpl {
    private totalAttempts: number;
    private correctAttempts: number;
    private percentCorrect: number;

    constructor(term: string, translation: string, totalAttempts: number, correctAttempts: number, category?: string) {
        super(term, translation, category);
        this.totalAttempts = totalAttempts;
        this.correctAttempts = correctAttempts;

        if (totalAttempts !== 0) {
            this.percentCorrect = this.correctAttempts / this.totalAttempts;
        } else {
            this.percentCorrect = 0;
        }
     }

}



