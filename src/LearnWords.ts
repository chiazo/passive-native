import { WordImpl } from "./WordImpl";
import { wordList } from "./main";

export class LearnWords extends WordImpl {
    private totalAttempts: number;
    private correctAttempts: number;
    private percentCorrect: number;

    constructor(term: string, translation: string, category?: string) {
        super(term, translation, category);
        this.totalAttempts = 0;
        this.correctAttempts = 0;

        if (this.totalAttempts !== 0) {
            this.percentCorrect = this.correctAttempts / this.totalAttempts;
        } else {
            this.percentCorrect = 0;
        }
     }

    getPercentCorrect(): number {
        return this.percentCorrect;
    }

    getTotalAttempts(): number {
        return this.totalAttempts;
    }

    getCorrectAttempts(): number {
        return this.correctAttempts;
    }

    setCorrectAttempts(correct: boolean) {
        this.totalAttempts++;
        if (correct) {
            this.correctAttempts++;
        }
    }


}



