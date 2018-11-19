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
const services_1 = require("../../../services");
const logger_1 = require("@hapiness/logger");
const operators_1 = require("rxjs/operators");
const schemas_1 = require("../../../schemas");
let PostCreateTravelRoute = class PostCreateTravelRoute {
    /**
     * Class constructor
     * @param _travelsService
     * @param _logger
     */
    constructor(_travelsService, _logger) {
        this._travelsService = _travelsService;
        this._logger = _logger;
    }
    /**
     *
     * @param request
     */
    onPost(request) {
        return this._travelsService.create(request.payload)
            .pipe(operators_1.tap(_ => this._logger.info(_)));
    }
};
PostCreateTravelRoute = __decorate([
    core_1.Route({
        path: '/api/travels',
        method: 'POST',
        config: {
            validate: {
                payload: schemas_1.TRAVEL_PAYLOAD
            },
            payload: {
                output: 'data',
                allow: 'application/json',
                parse: true
            },
            response: {
                status: {
                    201: schemas_1.TRAVEL_RESPONSE
                }
            },
            description: 'Create one travel',
            notes: 'Create a new travel and returns it',
            tags: ['api', 'travels']
        }
    }),
    __metadata("design:paramtypes", [services_1.TravelsService, logger_1.LoggerService])
], PostCreateTravelRoute);
exports.PostCreateTravelRoute = PostCreateTravelRoute;
//# sourceMappingURL=create.route.js.map