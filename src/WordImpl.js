"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var categories = {
    VERBS: 'verbs',
    GRAMMER: 'grammer',
    BODY: "body",
    ANIMALS: "animals",
    ADJECTIVES: "adjectives",
    OBJECTS: "objects",
    PLACES: "places",
    PEOPLE: "people",
    SAYINGS: "sayings"
};
var WordImpl = /** @class */ (function () {
    function WordImpl(term, translation, category) {
        this.term = term;
        this.translation = translation;
        this.category = category;
    }
    WordImpl.prototype.setCategory = function () {
        switch (this.category) {
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
    };
    WordImpl.prototype.getCategory = function () {
        return this.category;
    };
    ;
    WordImpl.prototype.getTermName = function () {
        return this.term;
    };
    WordImpl.prototype.getTranslation = function () {
        return this.translation;
    };
    return WordImpl;
}());
exports.WordImpl = WordImpl;
