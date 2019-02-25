import { Word } from "./Word";

 const categories = {
    VERBS: 'verbs',
    GRAMMER: 'grammer',
    BODY: "body",
    ANIMALS: "animals",
    ADJECTIVES: "adjectives",
    OBJECTS: "objects",
    PLACES: "places",
    PEOPLE: "people",
    SAYINGS: "sayings"
}

export class WordImpl implements Word {
    private term: string;    
    private translation: string;
    private category: string;

    constructor(term: string, translation: string, category: string) {
        this.term = term;
        this.translation = translation;
        this.category = category;
    }

    setCategory() {
        switch(this.category) {
            case 'verbs':
                this.category = categories.VERBS;
            case 'grammer':
                this.category = categories.GRAMMER;
            case 'body':
                this.category = categories.BODY;
            case 'animal':
                this.category = categories.ANIMALS;
            case 'adjective':
                this.category = categories.ADJECTIVES;
            case 'objects':
                this.category = categories.OBJECTS;
            case 'places':
                this.category = categories.PLACES;
            case 'people':
                this.category = categories.PEOPLE;
            case 'sayings':
                this.category = categories.SAYINGS;
        }
    }
    public getCategory(): string {
        return this.category;
    };

    public getTermName(): string {
        return this.term;
    }

    public getTranslation(): string {
        return this.translation;
    }
}   



