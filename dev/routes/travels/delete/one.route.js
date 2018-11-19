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
const schemas_1 = require("../../../schemas");
let DeleteOneTravelRoute = class DeleteOneTravelRoute {
    /**
     * Class constructor
     * @param _travelsService
     */
    constructor(_travelsService) {
        this._travelsService = _travelsService;
    }
    /**
     *
     * @param request
     */
    onDelete(request) {
        return this._travelsService.delete(request.params.id);
    }
};
DeleteOneTravelRoute = __decorate([
    core_1.Route({
        path: '/api/travels/{id}',
        method: 'DELETE',
        config: {
            validate: {
                params: {
                    id: schemas_1.ID_PARAMETER
                }
            },
            description: 'Delete one travel',
            notes: 'Delete one travel for the given id in path parameter',
            tags: ['api', 'travels']
        }
    }),
    __metadata("design:paramtypes", [services_1.TravelsService])
], DeleteOneTravelRoute);
exports.DeleteOneTravelRoute = DeleteOneTravelRoute;
//# sourceMappingURL=one.route.js.map