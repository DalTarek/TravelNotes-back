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
var TravelModel_1;
const mongo_1 = require("@hapiness/mongo");
let TravelModel = TravelModel_1 = class TravelModel extends mongo_1.Model {
    constructor(_mongoClientService) {
        // call parent constructor
        super(TravelModel_1);
        this._mongoClientService = _mongoClientService;
        // get dao
        const dao = this._mongoClientService.getDao(this.connectionOptions);
        // create schema
        this.schema = new dao.Schema({
            photo: {
                type: String,
                trim: true
            },
            departure: {
                type: Date,
                required: true
            },
            arrival: {
                type: Date,
                required: true
            },
            country: {
                type: String,
                required: true,
                trim: true
            },
            city: {
                type: String,
                required: true,
                trim: true
            },
            numberPerson: {
                type: String,
                required: true,
                trim: true
            },
            hotel: {
                type: String,
                trim: true
            },
            price: {
                type: String,
                required: true,
                trim: true
            },
            description: {
                type: String,
                trim: true
            }
        }, {
            versionKey: false
        });
    }
};
TravelModel = TravelModel_1 = __decorate([
    mongo_1.MongoModel({
        adapter: 'mongoose',
        collection: 'person'
    }),
    __metadata("design:paramtypes", [mongo_1.MongoClientService])
], TravelModel);
exports.TravelModel = TravelModel;
//# sourceMappingURL=travel.model.js.map