"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@hapiness/core");
const mongo_1 = require("@hapiness/mongo");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const travels_1 = require("../models/travels");
let TravelsDocumentService = class TravelsDocumentService {
    constructor(_mongoClientService) {
        this._mongoClientService = _mongoClientService;
        this._document = this._mongoClientService.getModel({ adapter: 'mongoose' }, travels_1.TravelModel);
    }
    /**
     * Call mongoose method, call toJSON on each result and returns Travel[] or undefined
     *
     * @return {Observable<Travel[] | void>}
     */
    find() {
        return rxjs_1.from(this._document.find({}))
            .pipe(operators_1.map((docs) => (!!docs && docs.length > 0) ? docs.map(_ => _.toJSON()) : undefined));
    }
    findById(id) {
        return rxjs_1.from(this._document.findById(id))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
    create(travel) {
        return rxjs_1.from(this._document.create(travel))
            .pipe(operators_1.map((doc) => doc.toJSON()));
    }
    findByIdAndUpdate(id, travel) {
        return rxjs_1.from(this._document.findByIdAndUpdate(id, travel, { new: true }))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
    findByIdAndRemove(id) {
        return rxjs_1.from(this._document.findByIdAndRemove(id))
            .pipe(operators_1.map((doc) => !!doc ? doc.toJSON() : undefined));
    }
};
TravelsDocumentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [mongo_1.MongoClientService])
], TravelsDocumentService);
exports.TravelsDocumentService = TravelsDocumentService;
//# sourceMappingURL=travels-document.service.js.map