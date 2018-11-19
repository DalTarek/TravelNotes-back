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
const travels_document_service_1 = require("./travels-document.service");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const biim_1 = require("@hapiness/biim");
let TravelsService = class TravelsService {
    /**
     * Class constructor
     */
    constructor(_travelsDocumentService) {
        this._travelsDocumentService = _travelsDocumentService;
    }
    listAll() {
        return this._travelsDocumentService.find();
    }
    one(id) {
        return this._travelsDocumentService.findById(id)
            .pipe(operators_1.catchError(e => rxjs_1.throwError(biim_1.Biim.preconditionFailed(e.message))), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(_) :
            rxjs_1.throwError(biim_1.Biim.notFound(`Travels with id '${id}' not found`))));
    }
    create(travel) {
        return this._addTravel(travel)
            .pipe(operators_1.flatMap(_ => this._travelsDocumentService.create(_)), operators_1.catchError(e => rxjs_1.throwError(biim_1.Biim.preconditionFailed(e.message))), operators_1.map(_ => ({ response: _, statusCode: 201 })));
    }
    update(id, travel) {
        return this._travelsDocumentService.findByIdAndUpdate(id, travel)
            .pipe(operators_1.catchError(e => rxjs_1.throwError(biim_1.Biim.preconditionFailed(e.message))), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(_) :
            rxjs_1.throwError(biim_1.Biim.notFound(`Travel with id '${id}' not found`))));
    }
    delete(id) {
        return this._travelsDocumentService.findByIdAndRemove(id)
            .pipe(operators_1.catchError(e => rxjs_1.throwError(biim_1.Biim.preconditionFailed(e.message))), operators_1.flatMap(_ => !!_ ?
            rxjs_1.of(undefined) :
            rxjs_1.throwError(biim_1.Biim.notFound(`Travel with id '${id}' not found`))));
    }
    _addTravel(travel) {
        return rxjs_1.of(travel);
    }
};
TravelsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [travels_document_service_1.TravelsDocumentService])
], TravelsService);
exports.TravelsService = TravelsService;
//# sourceMappingURL=travels.service.js.map