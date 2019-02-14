"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var WordImpl_1 = require("./src/WordImplImpl");
var LearnWords = /** @class */ (function (_super) {
    __extends(LearnWords, _super);
    function LearnWords(term, translation, totalAttempts, correctAttempts, category) {
        var _this = _super.call(this, term, translation, category) || this;
        _this.totalAttempts = totalAttempts;
        _this.correctAttempts = correctAttempts;
        if (totalAttempts !== 0) {
            _this.percentCorrect = _this.correctAttempts / _this.totalAttempts;
        }
        else {
            _this.percentCorrect = 0;
        }
        return _this;
    }
    return LearnWords;
}(WordImpl_1.WordImpl));
exports.LearnWords = LearnWords;
